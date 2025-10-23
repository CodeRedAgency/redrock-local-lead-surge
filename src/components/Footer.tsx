import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const locationData = [
  {
    name: "South Florida",
    address: "4032 Pinewood Lane, Weston FL, 33331",
    phone: "(954) 469-8881",
    path: "/south-florida",
  },
  {
    name: "Las Vegas",
    address: "4536 W Warm Springs Rd, Las Vegas NV, 89118",
    phone: "(702) 508-0098",
    path: "/las-vegas",
  },
  {
    name: "Oahu",
    address: "1326 Alapai Street, Honolulu HI, 96813",
    phone: "(808) 909-8801",
    path: "/oahu",
  },
  {
    name: "Maui",
    address: "1326 Alapai Street, Honolulu HI, 96813",
    phone: "(808) 909-3038",
    path: "/maui",
  },
  {
    name: "Columbus Ohio",
    address: "6605 Longshore Street Suite 240-320, Dublin, Oh 43017",
    phone: "(380) 235-3135",
    path: "/columbus-ohio",
  },
  {
    name: "Dallas",
    address: "18383 Preston Road # 202, Dallas, TX 75252",
    phone: "(972) 992-2576",
    path: "/dallas",
  },
];

export const Footer = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  
  // Helper to get language prefix based on current i18n language
  const getLanguagePrefix = () => {
    return i18n.language.startsWith('es') ? '/es' : '';
  };
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
      <div className="container mx-auto px-4">
        {/* Enhanced Navigation */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Home & Hiring Section */}
            <div className="space-y-6">
              {/* Home */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">{t("footer.home.title", { defaultValue: "Home" })}</h3>
                <Link 
                  to={getLanguagePrefix() + "/"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.home.home", { defaultValue: "Home" })}
                </Link>
              </div>

              {/* Hiring */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">{t("footer.hiring.title", { defaultValue: "Hiring" })}</h3>
                <div className="space-y-3">
                  <Link 
                    to={getLanguagePrefix() + "/hiring-req"} 
                    className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {t("footer.hiring.requirements", { defaultValue: "Hiring Requirements" })}
                  </Link>
                  <Link 
                    to={getLanguagePrefix() + "/hiring-application/how-to-use-the-maidily-mobile-app"} 
                    className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {t("footer.hiring.apply", { defaultValue: "How to use the Maidily mobile app" })}
                  </Link>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">{t("footer.about.title", { defaultValue: "About" })}</h3>
              <div className="space-y-3">
                <Link 
                  to={getLanguagePrefix() + "/terms-and-conditions-page"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.about.terms", { defaultValue: "Terms and Conditions" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/privacy-policy-page"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.about.privacy", { defaultValue: "Privacy Policy" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/about/faq"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.about.faq", { defaultValue: "FAQ" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/sitemap"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.about.sitemap", { defaultValue: "Sitemap" })}
                </Link>
              </div>
            </div>

            {/* Residential Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">{t("footer.residential.title", { defaultValue: "Residential Services" })}</h3>
              <div className="space-y-3">
                <Link 
                  to={getLanguagePrefix() + "/blog/standard-cleaning-vs-deep-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.residential.standardVsDeep", { defaultValue: "Standard vs Deep Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/standard-cleaning-services"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.residential.standard", { defaultValue: "Standard Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/deep-cleaning-services"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.residential.deep", { defaultValue: "Deep Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/airbnb-cleaning-services"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.residential.airbnb", { defaultValue: "Airbnb Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/post-construction-cleaning-services"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.residential.postConstruction", { defaultValue: "Post Construction" })}
                </Link>
              </div>
            </div>

            {/* Commercial Services */}
            <div className="space-y-4">
              <button
                onClick={() => setIsCommercialOpen(!isCommercialOpen)}
                className="flex items-center justify-between w-full text-xl font-bold text-primary mb-4 hover:text-primary-glow transition-colors group"
                aria-expanded={isCommercialOpen}
              >
                <span>{t("footer.commercial.title", { defaultValue: "Commercial Services" })}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${isCommercialOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`space-y-3 overflow-hidden transition-all duration-300 ${isCommercialOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <Link 
                  to={getLanguagePrefix() + "/commercial-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.main", { defaultValue: "Commercial Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/church-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.church", { defaultValue: "Church Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/data-center-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.dataCenter", { defaultValue: "Data Center Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/factory-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.factory", { defaultValue: "Factory Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/government-facility-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.government", { defaultValue: "Government Facility" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/gym-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.gym", { defaultValue: "Gym Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/medical-office-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.medical", { defaultValue: "Medical Office" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/retail-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.retail", { defaultValue: "Retail Store" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/school-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.school", { defaultValue: "School Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/showroom-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.showroom", { defaultValue: "Showroom Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/warehouse-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.warehouse", { defaultValue: "Warehouse Cleaning" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/salon-spa-cleaning"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.commercial.salonSpa", { defaultValue: "Salon & Spa" })}
                </Link>
              </div>
            </div>
  
            {/* Resources Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">{t("footer.resources.title", { defaultValue: "Resources" })}</h3>
              <div className="space-y-3">
                <Link 
                  to={getLanguagePrefix() + "/blog"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.resources.blog", { defaultValue: "Blog" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/commercial-cleaning-cost-estimator"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.resources.costEstimator", { defaultValue: "Commercial Cleaning Cost Estimator" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/commercial-cleaning-time-estimator"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.resources.timeEstimator", { defaultValue: "Commercial Cleaning Time Estimator" })}
                </Link>
                <Link 
                  to={getLanguagePrefix() + "/"} 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t("footer.resources.pricing", { defaultValue: "Pricing" })}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Locations with Contact Info */}
        <div className="border-t border-slate-700 pt-12 mb-8">
          <h3 className="font-bold text-2xl text-primary mb-8 text-center">Our Locations</h3>
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-3 text-xl font-semibold bg-slate-800/50 px-6 py-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+18888051733" className="text-white hover:text-primary transition-colors duration-300">
                (888) 805-1733
              </a>
            </div>
            <div className="flex items-center space-x-3 text-xl bg-slate-800/50 px-6 py-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:office@redrockcleans.com" className="text-white hover:text-primary transition-colors duration-300">
                office@redrockcleans.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationData.map((location) => (
              <Link 
                key={location.name} 
                to={location.path}
                className="bg-slate-800/30 p-6 rounded-lg hover:bg-slate-800/50 transition-colors duration-300 block group"
              >
                <h4 className="font-bold text-primary text-lg mb-4 group-hover:text-primary/80 transition-colors">{location.name}</h4>
                <div className="flex items-start space-x-3 text-slate-300 mb-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{location.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span 
                    className="text-slate-300 hover:text-primary transition-colors duration-300 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {location.phone}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="flex justify-center items-center space-x-6">
            <a href="https://www.facebook.com/redrockcleans/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://twitter.com/redrockcleans/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Twitter className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/red_rock_cleaning/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="http://www.linkedin.com/company/red-rock-cleaning/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/@redrockcleaning7597/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Youtube className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* SEO Text */}
        <div className="text-center mb-8">
          <p className="text-sm text-slate-400 leading-relaxed max-w-4xl mx-auto">
            Red Rock Cleans offers house cleaning, apartment cleaning, vacation rental cleaning and commercial cleaning services in the following areas: Fort Lauderdale, Las Vegas, Oahu, Maui, Columbus Ohio and Los Angeles.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2022 by <a href="https://www.coderedagency.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">CodeRed Agency</a></p>
        </div>
      </div>
    </footer>
  );
};

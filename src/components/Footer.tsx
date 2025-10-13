import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
      <div className="container mx-auto px-4">
        {/* Enhanced Navigation */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Home Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">Home</h3>
              <Link 
                to="/" 
                className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
              >
                Home
              </Link>
            </div>

            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">About</h3>
              <div className="space-y-3">
                <Link 
                  to="/terms-and-conditions-page" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Terms and Conditions
                </Link>
                <Link 
                  to="/privacy-policy-page" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/about/faq" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  FAQ
                </Link>
                <Link 
                  to="/sitemap" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">Services</h3>
              <div className="space-y-3">
                <Link 
                  to="/blog/standard-cleaning-vs-deep-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Standard vs Deep Cleaning
                </Link>
                <Link 
                  to="/standard-cleaning-services" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Standard Cleaning
                </Link>
                <Link 
                  to="/deep-cleaning-services" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Deep Cleaning
                </Link>
                <Link 
                  to="/airbnb-cleaning-services" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Airbnb Cleaning
                </Link>
                <Link 
                  to="/post-construction-cleaning-services" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Post Construction
                </Link>
                <Link 
                  to="/commercial-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Commercial Cleaning
                </Link>
                <Link 
                  to="/church-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Church Cleaning
                </Link>
                <Link 
                  to="/data-center-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Data Center Cleaning
                </Link>
                <Link 
                  to="/factory-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Factory Cleaning
                </Link>
                <Link 
                  to="/government-facility-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Government Facility Cleaning
                </Link>
                <Link 
                  to="/gym-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Gym Cleaning
                </Link>
                <Link 
                  to="/medical-office-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Medical Office Cleaning
                </Link>
                <Link 
                  to="/retail-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Retail Store Cleaning
                </Link>
                <Link 
                  to="/school-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  School Cleaning
                </Link>
                <Link 
                  to="/showroom-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Showroom Cleaning
                </Link>
                <Link 
                  to="/warehouse-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Warehouse Cleaning
                </Link>
                <Link 
                  to="/salon-spa-cleaning" 
                  className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                >
                  Salon & Spa Cleaning
                </Link>
              </div>
            </div>

            {/* Resources & Hiring Section */}
            <div className="space-y-6">
              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">Resources</h3>
                <div className="space-y-3">
                  <Link 
                    to="/blog" 
                    className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/" 
                    className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    Pricing
                  </Link>
                </div>
              </div>

              {/* Hiring */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">Hiring</h3>
                <div className="space-y-3">
                  <Link 
                    to="/hiring-req" 
                    className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    Hiring Requirements
                  </Link>
                  <Link 
                    to="/hiring-application/how-to-use-the-maidily-mobile-app" 
                    className="block text-slate-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    How to use the Maidily mobile app
                  </Link>
                </div>
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

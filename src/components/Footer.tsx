import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const locationData = [
  {
    name: "South Florida",
    address: "4032 Pinewood Lane, Weston FL, 33331",
    phone: "(954) 469-8881",
  },
  {
    name: "Las Vegas",
    address: "4536 W Warm Springs Rd, Las Vegas NV, 89118",
    phone: "(702) 508-0098",
  },
  {
    name: "Oahu",
    address: "1326 Alapai Street, Honolulu HI, 96813",
    phone: "(808) 909-8801",
  },
  {
    name: "Maui",
    address: "1326 Alapai Street, Honolulu HI, 96813",
    phone: "(808) 909-3038",
  },
  {
    name: "Columbus Ohio",
    address: "6605 Longshore Street Suite 240-320, Dublin, Oh 43017",
    phone: "(380) 235-3135",
  },
  {
    name: "Dallas",
    address: "18383 Preston Road # 202, Dallas, TX 75252",
    phone: "(972) 992-2576",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-20 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Home Section */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/standard-vs-deep" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Standard vs Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/standard-cleaning" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Standard Cleaning
                </Link>
              </li>
              <li>
                <Link to="/deep-cleaning" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/airbnb-cleaning" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Airbnb Cleaning
                </Link>
              </li>
              <li>
                <Link to="/post-construction" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Post Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Pricing Section */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Hiring Section */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Hiring</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hiring-requirements" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hiring Requirements
                </Link>
              </li>
              <li>
                <Link to="/maidily-app" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Maidily Mobile App
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-lg font-semibold">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+18888051733" className="hover:text-primary transition-colors">
                  (888) 805-1733
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:office@redrockcleans.com" className="hover:text-primary transition-colors">
                  office@redrockcleans.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/redrockcleans/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/redrockcleans/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/red_rock_cleaning/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="http://www.linkedin.com/company/red-rock-cleaning/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@redrockcleaning7597/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-bold text-xl text-primary mb-6 text-center">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationData.map((location) => (
              <div key={location.name} className="space-y-2">
                <h4 className="font-bold text-primary">{location.name}</h4>
                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Red Rock Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

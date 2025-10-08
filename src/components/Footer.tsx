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
        {/* Navigation Dropdown */}
        <div className="flex justify-center mb-12">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                Navigation
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full cursor-pointer">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/terms" className="w-full cursor-pointer">Terms and Conditions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/privacy" className="w-full cursor-pointer">Privacy Policy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/faq" className="w-full cursor-pointer">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sitemap" className="w-full cursor-pointer">Sitemap</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/standard-vs-deep" className="w-full cursor-pointer">Standard vs Deep Cleaning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/standard-cleaning" className="w-full cursor-pointer">Standard Cleaning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/deep-cleaning" className="w-full cursor-pointer">Deep Cleaning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/airbnb-cleaning" className="w-full cursor-pointer">Airbnb Cleaning</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/post-construction" className="w-full cursor-pointer">Post Construction</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full cursor-pointer">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/hiring-requirements" className="w-full cursor-pointer">Hiring Requirements</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/maidily-app" className="w-full cursor-pointer">Maidily Mobile App</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Locations with Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-bold text-xl text-primary mb-6 text-center">Our Locations</h3>
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
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

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-4 mb-6">
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

        {/* SEO Text */}
        <div className="text-center mb-6">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            Red Rock Cleans offers house cleaning, apartment cleaning, vacation rental cleaning and commercial cleaning services in the following areas: Fort Lauderdale, Las Vegas, Oahu, Maui, Columbus Ohio and Los Angeles.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2022 by CodeRed Agency</p>
        </div>
      </div>
    </footer>
  );
};

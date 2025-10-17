import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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

export const LasVegasBookingNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to="/las-vegas" className="hover:text-primary transition-colors relative z-10">
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
                    <DropdownMenuItem asChild>
                      <Link to="/las-vegas/airbnb-cleaning-services">Airbnb Cleaning Services in Las Vegas</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem asChild>
                  <Link to="/commercial-cleaning">Commercial Cleaning</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-all duration-300 group font-medium relative z-10">
                Pricing <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/commercial-cleaning-estimator">Commercial Cleaning Cost Estimator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-south-florida">South Florida</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-las-vegas">Las Vegas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-honolulu">Oahu</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-maui">Maui</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-columbus-ohio">Columbus Ohio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/book-now-dallas">Dallas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="hover:text-primary transition-colors relative z-10">
              Contact
            </Link>
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
                  <Link to="/las-vegas/airbnb-cleaning-services" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Airbnb Cleaning Services in Las Vegas
                  </Link>
                  <Link to="/commercial-cleaning" className="block ml-4 hover:text-primary transition-colors text-sm">
                    Commercial Cleaning
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium mb-2">Pricing</div>
                <div className="ml-4 space-y-2">
                  <Link to="/commercial-cleaning-estimator" className="block hover:text-primary transition-colors text-sm">
                    Commercial Cleaning Cost Estimator
                  </Link>
                  <Link to="/book-now-south-florida" className="block hover:text-primary transition-colors text-sm">
                    South Florida
                  </Link>
                  <Link to="/book-now-las-vegas" className="block hover:text-primary transition-colors text-sm">
                    Las Vegas
                  </Link>
                  <Link to="/book-now-honolulu" className="block hover:text-primary transition-colors text-sm">
                    Oahu
                  </Link>
                  <Link to="/book-now-maui" className="block hover:text-primary transition-colors text-sm">
                    Maui
                  </Link>
                  <Link to="/book-now-columbus-ohio" className="block hover:text-primary transition-colors text-sm">
                    Columbus Ohio
                  </Link>
                  <Link to="/book-now-dallas" className="block hover:text-primary transition-colors text-sm">
                    Dallas
                  </Link>
                </div>
              </div>

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

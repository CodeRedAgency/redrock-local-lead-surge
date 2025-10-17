import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const LasVegasBookingNavigation = ({ loginUrl, bookingUrl }: { loginUrl?: string; bookingUrl?: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Red Rock Cleans" className="h-24 w-auto" />
          </Link>

          {/* CTA Buttons Only */}
          <div className="flex items-center space-x-4">
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
    </header>
  );
};

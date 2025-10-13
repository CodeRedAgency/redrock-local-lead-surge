import { BookingNavigation } from "@/components/BookingNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const SouthFloridaBooking = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-fort-lauderdale/sign-in";
  
  useEffect(() => {
    // Load jQuery
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);
    
    // Load Maidily SDK after jQuery
    jqueryScript.onload = () => {
      const maidilyScript = document.createElement('script');
      maidilyScript.src = "https://maidily.com/iframe-sdk/maidily-iframe-sdk.js?version=0.1";
      maidilyScript.async = true;
      document.body.appendChild(maidilyScript);
      
      maidilyScript.onload = () => {
        if (window.MaidilyIframeSdk) {
          window.MaidilyIframeSdk.setup("f04916b341a48cc5eb13c3e32fb89b0b");
        }
      };
    };
    
    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll('script[src*="jquery"], script[src*="maidily"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Book Now - South Florida Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Book your professional cleaning service in South Florida. Easy online booking for residential and vacation rental cleaning." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <BookingNavigation loginUrl={loginUrl} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Book Your Cleaning Service</h1>
              <p className="text-xl text-muted-foreground">
                South Florida - Easy online booking
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/bookings/f04916b341a48cc5eb13c3e32fb89b0b" 
                width="100%" 
                id="maidily-booking-iframe" 
                style={{ border: 0, minHeight: "800px" }}
                title="South Florida Cleaning Booking"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SouthFloridaBooking;

declare global {
  interface Window {
    MaidilyIframeSdk: any;
  }
}

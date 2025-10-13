import { LasVegasBookingNavigation } from "@/components/LasVegasBookingNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const LasVegasBooking = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  
  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);
    
    jqueryScript.onload = () => {
      const maidilyScript = document.createElement('script');
      maidilyScript.src = "https://maidily.com/iframe-sdk/maidily-iframe-sdk.js?version=0.1";
      maidilyScript.async = true;
      document.body.appendChild(maidilyScript);
      
      maidilyScript.onload = () => {
        if (window.MaidilyIframeSdk) {
          window.MaidilyIframeSdk.setup("a6c110f6f791363deb77a66b08ac35a5");
        }
      };
    };
    
    return () => {
      const scripts = document.querySelectorAll('script[src*="jquery"], script[src*="maidily"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Book Now - Las Vegas Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Book your professional cleaning service in Las Vegas. Easy online booking for residential and commercial cleaning." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <LasVegasBookingNavigation loginUrl={loginUrl} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Book Your Cleaning Service</h1>
              <p className="text-xl text-muted-foreground">
                Las Vegas - Easy online booking
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/bookings/a6c110f6f791363deb77a66b08ac35a5" 
                width="100%" 
                id="maidily-booking-iframe" 
                style={{ border: 0, minHeight: "800px" }}
                title="Las Vegas Cleaning Booking"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LasVegasBooking;

declare global {
  interface Window {
    MaidilyIframeSdk: any;
  }
}

import { BookingNavigation } from "@/components/BookingNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const DallasBooking = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in";
  const { t } = useTranslation();
  
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
          window.MaidilyIframeSdk.setup("380e93ba232a54d947a1b2710e2ce08d");
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
        <title>Book Now - Dallas Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Book professional cleaning services in Dallas. Easy online booking for Dallas, Plano & Frisco homes and businesses. Schedule your cleaning today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <BookingNavigation loginUrl={loginUrl} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{t('booking.h1')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('booking.subtitle', { region: 'Dallas' })}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/bookings/380e93ba232a54d947a1b2710e2ce08d" 
                width="100%" 
                id="maidily-booking-iframe" 
                style={{ border: 0, minHeight: "800px" }}
                title="Dallas Cleaning Booking"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default DallasBooking;

declare global {
  interface Window {
    MaidilyIframeSdk: any;
  }
}

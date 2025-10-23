import { BookingNavigation } from "@/components/BookingNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const ColumbusBooking = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-ohio/sign-in";
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
          window.MaidilyIframeSdk.setup("f584ac8040a82da5b72f090a1c1f8fb0");
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
        <title>Book Columbus Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Book your professional cleaning service in Columbus Ohio. Easy online booking for house and office cleaning." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <BookingNavigation loginUrl={loginUrl} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{t('booking.h1')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('booking.subtitle', { region: 'Columbus Ohio' })}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/bookings/f584ac8040a82da5b72f090a1c1f8fb0" 
                width="100%" 
                id="maidily-booking-iframe" 
                style={{ border: 0, minHeight: "800px" }}
                title="Columbus Ohio Cleaning Booking"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ColumbusBooking;

declare global {
  interface Window {
    MaidilyIframeSdk: any;
  }
}

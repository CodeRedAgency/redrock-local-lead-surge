import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";

const OahuCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Get a Quote - Oahu Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Calculate your cleaning service cost instantly. Get an accurate quote for house cleaning in Oahu and Honolulu." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} hideLocationSelector={true} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Get Your Cleaning Quote</h1>
              <p className="text-xl text-muted-foreground">
                Oahu - Instant pricing calculator
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/calculator/397964c978ca16b871fc0044fe2f1f41" 
                width="100%" 
                height="600" 
                style={{ border: 0 }}
                title="Oahu Cleaning Calculator"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default OahuCalculator;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";

const MauiCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Get a Quote - Maui Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Calculate your cleaning service cost instantly. Get an accurate quote for house and vacation rental cleaning in Maui." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} hideLocationSelector={true} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Get Your Cleaning Quote</h1>
              <p className="text-xl text-muted-foreground">
                Maui - Instant pricing calculator
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/calculator/7874e2f4f5b476cb4d7551f01abdb167" 
                width="100%" 
                height="600" 
                style={{ border: 0 }}
                title="Maui Cleaning Calculator"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MauiCalculator;

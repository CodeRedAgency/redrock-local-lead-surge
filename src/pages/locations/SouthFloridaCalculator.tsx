import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const SouthFloridaCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-fort-lauderdale/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Get a Quote - South Florida Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Calculate your cleaning service cost instantly. Get an accurate quote for house cleaning in South Florida, Weston, and Fort Lauderdale." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Get Your Cleaning Quote</h1>
              <p className="text-xl text-muted-foreground">
                South Florida - Instant pricing calculator
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/calculator/f04916b341a48cc5eb13c3e32fb89b0b" 
                width="100%" 
                height="600" 
                style={{ border: 0 }}
                title="South Florida Cleaning Calculator"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SouthFloridaCalculator;

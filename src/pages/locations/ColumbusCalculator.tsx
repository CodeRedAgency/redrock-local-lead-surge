import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const ColumbusCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-ohio/sign-in";
  
  return (
    <>
      <Helmet>
        <title>Get a Quote - Columbus Ohio Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Calculate your cleaning service cost instantly. Get an accurate quote for house and office cleaning in Columbus Ohio." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} hideLocationSelector={true} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Get Your Cleaning Quote</h1>
              <p className="text-xl text-muted-foreground">
                Columbus Ohio - Instant pricing calculator
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/calculator/f584ac8040a82da5b72f090a1c1f8fb0" 
                width="100%" 
                height="600" 
                style={{ border: 0 }}
                title="Columbus Ohio Cleaning Calculator"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ColumbusCalculator;

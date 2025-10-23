import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import Hreflang from "@/components/Hreflang";

const SouthFloridaCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-fort-lauderdale/sign-in";
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Free South Florida Cleaning Quote | Red Rock Cleans</title>
        <meta name="description" content="Calculate your cleaning service cost instantly. Get an accurate quote for house cleaning in South Florida, Weston, and Fort Lauderdale." />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} hideLocationSelector={true} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{t('calculator.h1')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('calculator.subtitle', { region: 'South Florida' })}
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

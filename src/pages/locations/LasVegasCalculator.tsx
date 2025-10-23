import { LasVegasNavigation } from "@/components/LasVegasNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import Hreflang from "@/components/Hreflang";

const LasVegasCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-vegas/sign-in";
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Free Las Vegas Cleaning Quote | Red Rock Cleans</title>
        <meta name="description" content="Get an instant cleaning quote in Las Vegas. Calculate costs for Las Vegas & Henderson cleaning services. Free online estimate!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <LasVegasNavigation loginUrl={loginUrl} hideLocationSelector={true} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{t('calculator.h1')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('calculator.subtitle', { region: 'Las Vegas' })}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <iframe 
                src="https://maidily.com/iframes/calculator/a6c110f6f791363deb77a66b08ac35a5" 
                width="100%" 
                height="600" 
                style={{ border: 0 }}
                title="Las Vegas Cleaning Calculator"
              />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LasVegasCalculator;

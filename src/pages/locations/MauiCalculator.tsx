import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import Hreflang from "@/components/Hreflang";

const MauiCalculator = () => {
  const loginUrl = "https://customer-portal.maidily.com/red-rock-cleans-dallas/sign-in";
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Get a Quote - Maui Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Get an instant cleaning quote in Maui. Calculate costs for Maui cleaning services. Free online estimate for your home today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <Navigation loginUrl={loginUrl} hideLocationSelector={true} />
        
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{t('calculator.h1')}</h1>
              <p className="text-xl text-muted-foreground">
                {t('calculator.subtitle', { region: 'Maui' })}
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

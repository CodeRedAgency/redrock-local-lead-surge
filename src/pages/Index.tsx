import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { LocationCards } from "@/components/LocationCards";
import { TrustSection } from "@/components/TrustSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Hreflang from "@/components/Hreflang";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Red Rock Cleaning - Trusted Local Cleaning Experts</title>
        <meta name="description" content="Professional cleaning services across South Florida, Las Vegas, Hawaii, Columbus Ohio, and Dallas. Residential, commercial, and vacation rental cleaning." />
        <script type="text/javascript">
          {(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tsks4vjdkz")};
        </script>
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-40 overflow-hidden min-h-[80vh]">
            <div className="absolute inset-0">
              {/* Primary Hero Image */}
              <img 
                src={heroResidential} 
                alt="Professional residential cleaning services"
                className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_ease-in-out_infinite]"
                loading="eager"
                fetchpriority="high"
              />
              {/* Enhanced overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60"></div>
              {/* Subtle pattern overlay for visual interest */}
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[80vh]">
              <div className="max-w-5xl mx-auto text-center space-y-8 w-full">
                <div className="inline-block animate-fade-in">
                  <span className="inline-flex items-center px-6 py-3 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-sm mb-8 shadow-lg backdrop-blur-sm">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
                    {t("home.badge", { defaultValue: "Expertos locales de limpieza confiables" })}
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.15] tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  {t("home.h1.part1", { defaultValue: "Eleva tu espacio con" })}
                  <span className="block mt-3 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-sm">
                    {t("home.h1.part2", { defaultValue: "Limpieza premium" })}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
                  {t("home.subtitle", { defaultValue: "Experimenta la excelencia en servicios de limpieza residencial, comercial y de alquiler vacacional en múltiples ubicaciones" })}
                </p>
                <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <p className="text-lg md:text-xl font-semibold mb-6 text-foreground/95 bg-background/20 backdrop-blur-sm rounded-full py-3 px-6 inline-block border border-primary/20">
                    {t("home.selectLocation", { defaultValue: "Selecciona tu ubicación para empezar" })}
                  </p>
                </div>
                
                {/* Service Type Indicators */}
                <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground/90">{t("home.badges.residential", { defaultValue: "Residencial" })}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground/90">{t("home.badges.commercial", { defaultValue: "Comercial" })}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground/90">{t("home.badges.vacationRental", { defaultValue: "Alquiler vacacional" })}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <LocationCards />
          
          <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]"></div>
            <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
                  {t("home.difference.badge", { defaultValue: "The Red Rock Difference" })}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t("home.difference.title", { defaultValue: "Why Choose Red Rock Cleaning?" })}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t("home.difference.copy", { defaultValue: "We're a multi-location premium cleaning service dedicated to excellence. Whether you need cleaning for your home, office, or vacation rental, our professional teams deliver exceptional results every time." })}
              </p>
            </div>
          </section>
          
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;

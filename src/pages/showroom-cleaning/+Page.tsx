import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Gem, Sparkles, Handshake, Wrench, Monitor, Car, Users, DollarSign, Search } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const ShowroomCleaningPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("commercial.showroom.title", { defaultValue: "Showroom Cleaning Services | Red Rock Cleans" })}</title>
        <meta name="description" content={t("commercial.showroom.description", { defaultValue: "Professional showroom cleaning services. Red Rock Cleans enhances your product presentation and client experience with meticulous cleaning for car dealerships, furniture stores, and more." })} />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroCommercial})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("commercial.showroom.heading", { defaultValue: "Impeccable Showroom Cleaning to Showcase Your Products" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("commercial.showroom.tagline", { defaultValue: "Transform your showroom into a pristine showcase that elevates your products and impresses every client" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-muted-foreground mb-12">
                  For high-value products, the showroom's cleanliness is a direct reflection of the product's quality and is crucial for influencing purchasing decisions. Our meticulous showroom cleaning services ensure every surface gleams, every product is perfectly presented, and every client experiences the premium quality your brand represents.
                </p>

                {/* Creating a Flawless Buying Environment */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Creating a Flawless Buying Environment</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Gem className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Pristine Product Presentation</h3>
                        <p className="text-sm text-muted-foreground">
                          We ensure every product is free of dust, smudges, and fingerprints, creating an immaculate display that showcases your merchandise in its best possible light and maximizes its perceived value.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Sparkles className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Gleaming Floors & Surfaces</h3>
                        <p className="text-sm text-muted-foreground">
                          Perfectly polished floors and spotless surfaces reflect luxury and attention to detail, creating an environment that enhances the premium nature of your products and brand.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Handshake className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">A Premium Client Experience</h3>
                        <p className="text-sm text-muted-foreground">
                          Clean client lounges, offices, and reception areas create a professional, welcoming atmosphere that builds trust and confidence in your brand and products.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Meticulous Showroom Cleaning Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Meticulous Showroom Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Wrench className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Floor Care & Polishing</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Specialized tile floor care</li>
                          <li>• Concrete floor polishing</li>
                          <li>• Hardwood floor maintenance</li>
                          <li>• Edge and corner detailing</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Monitor className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Window & Glass Cleaning</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Streak-free plate glass cleaning</li>
                          <li>• Display case maintenance</li>
                          <li>• Door and frame polishing</li>
                          <li>• Exterior window cleaning</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Car className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Product & Display Dusting</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Lint-free product dusting</li>
                          <li>• Display fixture cleaning</li>
                          <li>• Product positioning verification</li>
                          <li>• Signage and label care</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Users className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Client Lounges & Offices</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Seating area sanitization</li>
                          <li>• Coffee and refreshment stations</li>
                          <li>• Office space maintenance</li>
                          <li>• Reception area detailing</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* The Impact of a Perfectly Clean Showroom */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">The Impact of a Perfectly Clean Showroom</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <Handshake className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">98%</div>
                      <h3 className="text-xl font-semibold mb-2">Positive Client Impressions</h3>
                      <p className="text-primary-foreground/80">
                        Clients notice and appreciate the pristine condition of your showroom
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <DollarSign className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">25%</div>
                      <h3 className="text-xl font-semibold mb-2">Increased Perceived Value</h3>
                      <p className="text-primary-foreground/80">
                        Clean showrooms make products appear more valuable and desirable
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Search className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">100%</div>
                      <h3 className="text-xl font-semibold mb-2">Attention to Detail Score</h3>
                      <p className="text-primary-foreground/80">
                        Every surface, corner, and detail receives our meticulous attention
                      </p>
                    </div>
                  </div>
                </div>

                {/* Find Showroom Cleaning In Your Area */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Showroom Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/showroom-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/showroom-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/showroom-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/showroom-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/showroom-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/showroom-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How often should showrooms be professionally cleaned?</AccordionTrigger>
                      <AccordionContent>
                        Most showrooms benefit from daily cleaning during off-hours to maintain their pristine appearance. High-traffic showrooms like car dealerships may require multiple daily cleanings, while furniture or luxury goods showrooms typically need 3-5 cleanings per week to maintain their premium appearance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do you use special products for different types of showrooms?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we use specialized products tailored to each showroom type. For car dealerships, we use automotive-safe products that won't damage paint or interiors. For furniture showrooms, we use gentle cleaners that won't harm fabrics or finishes. We always use premium, professional-grade products that enhance rather than damage your products.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do you handle cleaning around expensive products?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained to work carefully around valuable products and displays. We use specialized tools and techniques, coordinate with your staff for product movement when necessary, and always prioritize the safety and integrity of your merchandise. We're fully insured and bonded for your peace of mind.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can you clean during business hours?</AccordionTrigger>
                      <AccordionContent>
                        We prefer to clean during off-hours to avoid disrupting your business operations and customer experience. However, we can provide light maintenance cleaning during business hours for high-traffic areas like restrooms, client lounges, and reception areas without interfering with your sales activities.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Showroom?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional showroom cleaning services.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ShowroomCleaningPage;

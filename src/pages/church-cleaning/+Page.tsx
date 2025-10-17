import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Heart, Shield, Users } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const ChurchCleaningPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("commercial.church.title", { defaultValue: "Professional Church Cleaning Services | Red Rock Cleans" })}</title>
        <meta name="description" content={t("commercial.church.description", { defaultValue: "Professional church cleaning services by Red Rock Cleans. We provide respectful, detailed cleaning for sanctuaries, fellowship halls, and all places of worship. Learn more." })} />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("commercial.church.heading", { defaultValue: "Professional Church Cleaning Services" })}</h1>
              <p className="text-xl md:text-2xl mb-8">
                {t("commercial.church.tagline", { defaultValue: "Creating a welcoming, sacred environment through respectful and thorough cleaning" })}
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">{t("cta.getQuote", { defaultValue: "Get a Quote" })}</Link>
              </Button>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-xl text-muted-foreground">
                    Professional church cleaning ensures your sanctuary remains a beautiful, safe space for your congregation and visitors.
                  </p>
                </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Respectful Service</h3>
                  <p className="text-muted-foreground">Understanding the sacred nature of your space</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Trusted & Reliable</h3>
                  <p className="text-muted-foreground">Consistent, dependable cleaning for your congregation</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                  <p className="text-muted-foreground">Supporting your mission with quality service</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Church Cleaning Process</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sanctuary & Worship Areas</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Gentle cleaning of pews and seating areas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Altar and pulpit area maintenance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Floor cleaning and carpet care</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Window and glass cleaning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Light fixture and chandelier dusting</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Fellowship & Common Areas</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Kitchen and food service area cleaning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Classroom and meeting room maintenance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Restroom sanitization and restocking</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Nursery and children's area cleaning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Office and administrative area upkeep</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Specialized Church Cleaning</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Organ and musical instrument care</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Baptismal font and sacred vessel cleaning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Storage room and supply area organization</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Entrance and foyer maintenance</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Seasonal decoration setup and removal</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Safety & Health Protocols</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>COVID-19 safety protocols and disinfection</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Allergen reduction and air quality improvement</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Eco-friendly and safe cleaning products</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Background-checked and insured staff</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Flexible scheduling around worship services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Professional Church Cleaning Matters</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Creating a Welcoming Environment</h3>
                    <p className="mb-4">
                      A clean, well-maintained church creates a positive first impression for visitors and provides a comfortable, peaceful environment for worship and fellowship.
                    </p>
                    <h3 className="text-xl font-semibold mb-3">Health & Safety for Your Congregation</h3>
                    <p>
                      Professional cleaning reduces allergens, eliminates germs, and ensures your facility meets health and safety standards for all age groups.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Reliability & Consistency</h3>
                    <p className="mb-4">
                      Dependable cleaning services ensure your church is always ready for services, events, and community gatherings without the stress of managing cleaning tasks.
                    </p>
                    <h3 className="text-xl font-semibold mb-3">Professional Expertise</h3>
                    <p>
                      Trained professionals understand the unique needs of religious facilities and use appropriate techniques and products for different surfaces and areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Find Church Cleaning In Your Area</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link 
                    to="/las-vegas/church-cleaning/" 
                    className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                  >
                    Las Vegas
                  </Link>
                  <Link 
                    to="/dallas/church-cleaning/" 
                    className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                  >
                    Dallas
                  </Link>
                  <Link 
                    to="/south-florida/church-cleaning/" 
                    className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                  >
                    South Florida
                  </Link>
                  <Link 
                    to="/columbus-ohio/church-cleaning/" 
                    className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                  >
                    Columbus, Ohio
                  </Link>
                  <Link 
                    to="/maui/church-cleaning/" 
                    className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                  >
                    Maui
                  </Link>
                  <Link 
                    to="/oahu/church-cleaning/" 
                    className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                  >
                    Oahu
                  </Link>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Other Commercial Cleaning Solutions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link 
                    to="/commercial-cleaning" 
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">Commercial Cleaning</h3>
                    <p className="text-muted-foreground">
                      Professional office and business cleaning services for all commercial properties.
                    </p>
                  </Link>
                  <Link 
                    to="/post-construction-cleaning-services" 
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">Post-Construction Cleaning</h3>
                    <p className="text-muted-foreground">
                      Specialized cleaning after construction or renovation projects.
                    </p>
                  </Link>
                  <Link 
                    to="/deep-cleaning-services" 
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
                    <p className="text-muted-foreground">
                      Comprehensive, detailed cleaning for thorough sanitization and maintenance.
                    </p>
                  </Link>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What is included in church cleaning services?</h3>
                    <p className="text-muted-foreground">
                      Our church cleaning services include sanctuary cleaning, fellowship hall maintenance, restroom sanitization, classroom upkeep, office cleaning, and specialized care for religious items and musical instruments. We also provide seasonal decoration services and flexible scheduling around worship times.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How often should a church be professionally cleaned?</h3>
                    <p className="text-muted-foreground">
                      Most churches benefit from weekly cleaning services, especially for high-traffic areas like sanctuaries, fellowship halls, and restrooms. Some areas may need daily cleaning during busy periods, while others can be maintained with bi-weekly or monthly deep cleaning services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Do you use safe cleaning products for religious facilities?</h3>
                    <p className="text-muted-foreground">
                      Yes, we use eco-friendly, non-toxic cleaning products that are safe for all ages and won't damage religious items, musical instruments, or sensitive surfaces. Our products are also effective at removing allergens and maintaining air quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can you work around our worship schedule?</h3>
                    <p className="text-muted-foreground">
                      Absolutely. We understand that churches have specific schedules and we work around your worship times, special events, and religious observances. We can provide services during off-hours, weekdays, or whenever is most convenient for your congregation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience Professional Church Cleaning?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Choose your location and get a personalized quote for respectful, professional church cleaning services.
                </p>
                <Button size="lg" asChild>
                  <Link to="/commercial-quote">Find Your Location & Get a Quote</Link>
                </Button>
              </div>

              <div className="mt-12 text-center">
                <img 
                  src={heroCommercial} 
                  alt="A clean and serene church sanctuary after professional cleaning by Red Rock Cleans"
                  className="max-w-4xl mx-auto rounded-lg shadow-lg"
                />
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

export default ChurchCleaningPage;

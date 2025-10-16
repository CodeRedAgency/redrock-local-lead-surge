import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Sparkles, ShoppingCart, Shirt, Package, Square, Monitor, Users, Star, Clock } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const RetailCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Retail Store Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Professional retail store cleaning services. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts, sales floors, and more." />
      </Helmet>
      
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Pristine Retail Cleaning to Elevate Your Brand</h1>
              <p className="text-xl md:text-2xl mb-8">
                Transform your retail space into a spotless showcase that captivates customers and drives sales
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/commercial-quote">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-muted-foreground mb-12">
                  A customer's perception of your brand begins the moment they walk through your doors. A spotless retail environment is not just about cleanliness—it's about creating an unforgettable shopping experience that builds trust, enhances your brand image, and keeps customers coming back for more.
                </p>

                {/* Creating an Unforgettable Customer Experience */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Creating an Unforgettable Customer Experience</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Sparkles className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Immaculate First Impressions</h3>
                        <p className="text-sm text-muted-foreground">
                          Crystal-clear entryways and windows create an inviting atmosphere that welcomes customers and showcases your brand's attention to detail from the very first moment.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <ShoppingCart className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">A Healthy Shopping Space</h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive disinfection of high-touch areas like counters, door handles, and payment terminals ensures a safe and healthy environment for both customers and staff.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Shirt className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Protecting Your Products</h3>
                        <p className="text-sm text-muted-foreground">
                          Meticulous dust and debris control keeps your merchandise pristine and presentable, ensuring products look their best and customers can focus on making purchases.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Comprehensive Retail Cleaning Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Retail Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Package className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Sales Floor & Displays</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Floor polishing & carpet care</li>
                          <li>• Display fixture dusting</li>
                          <li>• Product shelf cleaning</li>
                          <li>• Shopping cart sanitization</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Square className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Fitting Rooms & Restrooms</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Mirror & glass cleaning</li>
                          <li>• Floor sanitization</li>
                          <li>• Fixture disinfection</li>
                          <li>• Supply restocking</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Monitor className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Windows & Storefront</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Streak-free glass cleaning</li>
                          <li>• Window frame maintenance</li>
                          <li>• Door hardware polishing</li>
                          <li>• Exterior surface cleaning</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Package className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Back-of-House & Stockrooms</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Employee area cleaning</li>
                          <li>• Stockroom organization</li>
                          <li>• Break room sanitization</li>
                          <li>• Office space maintenance</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* The Impact of a Professionally Cleaned Store */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">The Impact of a Professionally Cleaned Store</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <Users className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">95%</div>
                      <h3 className="text-xl font-semibold mb-2">Positive Customer Impressions</h3>
                      <p className="text-primary-foreground/80">
                        Customers notice and appreciate a clean, well-maintained retail environment
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Star className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">85%</div>
                      <h3 className="text-xl font-semibold mb-2">Enhanced Brand Image</h3>
                      <p className="text-primary-foreground/80">
                        Clean stores are perceived as more professional and trustworthy
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Clock className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">30+</div>
                      <h3 className="text-xl font-semibold mb-2">Hours Saved for Your Staff</h3>
                      <p className="text-primary-foreground/80">
                        Weekly cleaning time your team can focus on customer service
                      </p>
                    </div>
                  </div>
                </div>

                {/* Find Retail Store Cleaning In Your Area */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find Retail Store Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/retail-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/retail-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/retail-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/retail-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/retail-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/retail-cleaning/" 
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
                      <AccordionTrigger>How often should retail stores be professionally cleaned?</AccordionTrigger>
                      <AccordionContent>
                        Most retail stores benefit from daily cleaning during off-hours, with deep cleaning 2-3 times per week. High-traffic areas like clothing stores and electronics shops may require more frequent cleaning, while specialty boutiques might need less frequent but more detailed cleaning services.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What cleaning products do you use for retail environments?</AccordionTrigger>
                      <AccordionContent>
                        We use professional-grade, eco-friendly cleaning products that are safe for retail environments, including delicate merchandise, electronics, and fabrics. Our products are non-toxic and won't damage displays or leave residue that could affect your products.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do you clean during store hours or after closing?</AccordionTrigger>
                      <AccordionContent>
                        We typically perform most cleaning services after store hours to minimize disruption to your business operations. However, we can also provide light maintenance cleaning during business hours, focusing on high-touch areas and restrooms without interfering with customer shopping.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do you handle cleaning around delicate merchandise and displays?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained to work carefully around merchandise and displays. We use specialized tools and techniques to clean thoroughly while protecting your products. We can also coordinate with your staff to move items safely when deep cleaning is needed.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Retail Space?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional retail store cleaning services.
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

export default RetailCleaningPage;

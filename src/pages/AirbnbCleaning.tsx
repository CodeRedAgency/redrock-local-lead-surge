import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Check, Clock, Star, Users } from "lucide-react";

const AirbnbCleaning = () => {
  return (
    <>
      <Helmet>
        <title>Airbnb Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Professional Airbnb and vacation rental cleaning services. Fast turnovers, consistent quality, and guest-ready results every time." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Airbnb Cleaning Services</h1>
                <p className="text-xl text-muted-foreground">
                  Professional turnover cleaning for vacation rentals and short-term properties
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quick Turnover</h3>
                  <p className="text-muted-foreground">Same-day service available</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">5-Star Ready</h3>
                  <p className="text-muted-foreground">Guest-ready standards</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Host Partners</h3>
                  <p className="text-muted-foreground">Trusted by hundreds</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quality Checked</h3>
                  <p className="text-muted-foreground">Every clean verified</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Turnover Cleaning Checklist</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Every Turnover</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Strip and remake all beds with fresh linens</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Replace all towels and toiletries</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Deep clean all bathrooms</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Kitchen deep clean and restock</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Vacuum and mop all floors</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Dust all surfaces and decor</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Guest Experience</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Check and replenish supplies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Test all appliances and remotes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Report any maintenance issues</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Take before/after photos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Lock and secure property</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Send completion notification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Why Hosts Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
                    <p>Last-minute bookings? No problem. We work around your check-in/check-out times.</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">Consistent Quality</h3>
                    <p>Every clean meets the same high standard, ensuring great guest reviews.</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">Property Care</h3>
                    <p>We treat your property with care and report any issues immediately.</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Let us handle the cleaning so you can focus on being a great host.
                </p>
                <a href="tel:+18888051733" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Call (888) 805-1733
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AirbnbCleaning;

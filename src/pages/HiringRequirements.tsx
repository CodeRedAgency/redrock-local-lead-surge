import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Check, UserCheck, Shield, Award } from "lucide-react";

const HiringRequirements = () => {
  return (
    <>
      <Helmet>
        <title>Hiring Requirements - Join Our Team | Red Rock Cleaning</title>
        <meta name="description" content="Explore career opportunities at Red Rock Cleaning. Learn about our hiring requirements and join our professional cleaning team." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
                <p className="text-xl text-muted-foreground">
                  Become part of the Red Rock Cleaning family and build a rewarding career
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                  <p className="text-muted-foreground">Training and advancement opportunities</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Job Security</h3>
                  <p className="text-muted-foreground">Consistent work and fair pay</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Great Benefits</h3>
                  <p className="text-muted-foreground">Competitive compensation package</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Hiring Requirements</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Basic Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Must be 18 years or older</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Legal authorization to work in the United States</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Reliable transportation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Valid driver's license and insurance (for some positions)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Pass background check</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Desired Qualities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Strong work ethic and attention to detail</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Excellent customer service skills</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Ability to work independently and in teams</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Physical ability to perform cleaning tasks</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Professional appearance and demeanor</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Competitive hourly wages</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Flexible scheduling options</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Comprehensive paid training</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Performance bonuses and incentives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Career advancement opportunities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Supportive work environment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Application Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <h3 className="font-bold mb-2">Apply</h3>
                    <p className="text-sm">Submit your application online or call us</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2</div>
                    <h3 className="font-bold mb-2">Interview</h3>
                    <p className="text-sm">Meet with our hiring team</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3</div>
                    <h3 className="font-bold mb-2">Background Check</h3>
                    <p className="text-sm">Complete screening process</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">4</div>
                    <h3 className="font-bold mb-2">Training</h3>
                    <p className="text-sm">Start your paid training</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Contact us today to start your career with Red Rock Cleaning.
                </p>
                <div className="space-y-4">
                  <div>
                    <a href="tel:+18888051733" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Call (888) 805-1733
                    </a>
                  </div>
                  <div>
                    <a href="mailto:office@redrockcleans.com" className="text-primary hover:underline">
                      Or email: office@redrockcleans.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HiringRequirements;

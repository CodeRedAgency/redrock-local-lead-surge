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
                <h2 className="text-3xl font-bold mb-6 text-primary">We Are Hiring</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">About the job:</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      We are searching for highly skilled House Cleaning Technicians, house cleaners, and housekeepers who take pride in their work. You will be responsible for cleaning, vacuuming, washing, dusting, mopping, and sanitizing all areas and surfaces of our clients' homes, apartments, and small offices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">What does it pay?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      We pay an average of $17-$25 per hour. That's about $700-$900 per week plus tips. If working on an active schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Why work with us?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      We believe if our workers are happy, they'll do their work with passion while we help them accomplish their goals and dreams. We also understand what it takes to be a good cleaning technician, which is why we respect, value, and pay very well for great talent.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Get paid and learn:</strong> If you have never cleaned for work before no problem. Your training will be paid ($17/hr. for 25 sessions than $20/hr after) No experience is required. Applicants must be used to physical labor, standing for 6-8 hours a day.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Job Security:</strong> The cleaning industry is considered essential labor! It's the best time to join us, and it's a job that will always be needed.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Weekly payment via Zelle:</strong> You will receive a weekly payment (direct deposit to your bank account via Zelle).</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>If you are working on property management assigned jobs, pay period is based on our customer's payment schedule of bi-weekly or monthly. (We will inform you again if we assigned you to these jobs.)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Do I work alone or on a team?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Cleaning jobs are mostly performed by 2 cleaners. For bigger jobs, we send teams of 3 or 4 people. You must have reliable transportation to mobilize to the work sites.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">How do I check my schedule?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      We use a scheduling phone application, where you can easily see your daily schedule.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">How do I get paid?</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      We pay using Zelle or (Cash App, Venmo, Paypal) to your bank account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Job requirements:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Over 21 years of age</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Free of drugs and felonies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Authorized to work in the US</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Must own a vehicle and smartphone</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Driver's license</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Verifiable work history and references, preferably 1 year or more</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Excellent attitude and work ethic</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Job Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p><strong>Location:</strong> South Florida, Las Vegas, Honolulu, Maui, Dallas, Columbus Ohio</p>
                        <p><strong>Salary:</strong> $17 to $25 hourly</p>
                        <p><strong>Employment:</strong> Sub-Contractor</p>
                      </div>
                      <div>
                        <p><strong>Experience:</strong> No experience required</p>
                        <p><strong>Job Type:</strong> Contractor 1099</p>
                      </div>
                    </div>
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
                  Start your application process today and join our team.
                </p>
                <div className="space-y-4">
                  <div>
                    <a href="/hiring-application-new" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Apply Now
                    </a>
                  </div>
                  <div>
                    <a href="tel:+18888051733" className="text-primary hover:underline mr-4">
                      Call (888) 805-1733
                    </a>
                    <a href="mailto:office@redrockcleans.com" className="text-primary hover:underline">
                      Email: office@redrockcleans.com
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

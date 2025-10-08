import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Smartphone, Calendar, DollarSign, MapPin, Clock, Award } from "lucide-react";

const MaidilyApp = () => {
  return (
    <>
      <Helmet>
        <title>Maidily Mobile App - For Our Team | Red Rock Cleaning</title>
        <meta name="description" content="Learn how to use the Maidily mobile app for managing schedules, tracking jobs, and streamlining your work at Red Rock Cleaning." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Maidily Mobile App</h1>
                <p className="text-xl text-muted-foreground">
                  Your essential tool for managing jobs, schedules, and communication
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                  <p className="text-muted-foreground">Intuitive interface for all skill levels</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Manage Schedule</h3>
                  <p className="text-muted-foreground">View and update your daily jobs</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md text-center">
                  <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Track Earnings</h3>
                  <p className="text-muted-foreground">Monitor your income in real-time</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Key Features</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Calendar className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Schedule Management</h3>
                        <p className="text-muted-foreground">View your daily, weekly, and monthly schedule. Accept or decline job assignments with one tap.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">GPS Navigation</h3>
                        <p className="text-muted-foreground">Get turn-by-turn directions to each job location. Never get lost finding your next appointment.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Time Tracking</h3>
                        <p className="text-muted-foreground">Clock in and out digitally. Track your hours automatically for accurate payroll.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <DollarSign className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Earnings Dashboard</h3>
                        <p className="text-muted-foreground">See your daily earnings and tips. Track your income over time and view payment history.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Award className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
                        <p className="text-muted-foreground">View customer ratings and feedback. Track your performance bonuses and achievements.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Smartphone className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Job Details</h3>
                        <p className="text-muted-foreground">Access customer notes, special instructions, and property details for each job.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Getting Started</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <h3 className="font-bold mb-2">Download</h3>
                    <p className="text-sm">Get the app from App Store or Google Play</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">2</div>
                    <h3 className="font-bold mb-2">Login</h3>
                    <p className="text-sm">Use credentials provided during onboarding</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3</div>
                    <h3 className="font-bold mb-2">Setup</h3>
                    <p className="text-sm">Complete your profile and preferences</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">4</div>
                    <h3 className="font-bold mb-2">Start Working</h3>
                    <p className="text-sm">Accept jobs and begin earning</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">App Support</h2>
                <div className="max-w-2xl mx-auto space-y-4">
                  <div className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      Our support team is available to help with any app-related questions or technical issues.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• In-app chat support available 7 days a week</li>
                      <li>• Video tutorials in the app's Help section</li>
                      <li>• Call support at <a href="tel:+18888051733" className="text-primary hover:underline">(888) 805-1733</a></li>
                      <li>• Email: <a href="mailto:office@redrockcleans.com" className="text-primary hover:underline">office@redrockcleans.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Team Today</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to start working with Red Rock Cleaning? Apply now and get access to the Maidily app.
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

export default MaidilyApp;

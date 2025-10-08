import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Red Rock Cleaning</title>
        <meta name="description" content="Read our terms and conditions for using Red Rock Cleaning services." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-8">Terms and Conditions</h1>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <section>
                  <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using Red Rock Cleaning services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">2. Services</h2>
                  <p className="text-muted-foreground">
                    Red Rock Cleaning provides professional cleaning services including residential, commercial, Airbnb, and post-construction cleaning. All services are subject to availability and scheduling.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">3. Booking and Cancellation</h2>
                  <p className="text-muted-foreground">
                    Bookings can be made through our website or by phone. Cancellations must be made at least 24 hours before the scheduled service time to avoid cancellation fees. Late cancellations may be subject to a 50% service fee.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">4. Payment Terms</h2>
                  <p className="text-muted-foreground">
                    Payment is due upon completion of services unless other arrangements have been made. We accept major credit cards, debit cards, and cash. Prices are subject to change with 30 days notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">5. Liability and Insurance</h2>
                  <p className="text-muted-foreground">
                    Red Rock Cleaning is fully insured and bonded. While we take every precaution to protect your property, we are not liable for pre-existing damage or damages caused by circumstances beyond our control.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">6. Client Responsibilities</h2>
                  <p className="text-muted-foreground">
                    Clients are responsible for providing access to the property, securing valuable items, and informing us of any special requirements or concerns before service begins.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">7. Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions about these terms, please contact us at office@redrockcleans.com or call (888) 805-1733.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;

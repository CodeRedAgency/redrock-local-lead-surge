import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Red Rock Cleaning</title>
        <meta name="description" content="Read our privacy policy to understand how Red Rock Cleaning protects your personal information." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <section>
                  <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We collect personal information that you provide when booking our services, including name, address, phone number, email, and payment information. We also collect service preferences and special instructions.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground">
                    Your information is used to provide cleaning services, process payments, communicate about appointments, improve our services, and send promotional materials (with your consent).
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">3. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell your personal information. We may share information with service providers who assist in our operations, and as required by law or to protect our rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">5. Your Rights</h2>
                  <p className="text-muted-foreground">
                    You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">6. Cookies</h2>
                  <p className="text-muted-foreground">
                    Our website uses cookies to improve user experience and analyze site traffic. You can control cookie settings through your browser.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4">7. Contact Us</h2>
                  <p className="text-muted-foreground">
                    For privacy-related questions, contact us at office@redrockcleans.com or call (888) 805-1733.
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

export default PrivacyPolicy;

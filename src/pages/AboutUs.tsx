import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Professional Cleaning Services | Red Rock Cleaning</title>
        <meta name="description" content="Learn about Red Rock Cleaning's commitment to excellence in residential and commercial cleaning services across multiple locations." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">About Red Rock Cleaning</h1>
                <p className="text-xl text-muted-foreground">
                  Your trusted partner in professional cleaning services
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Red Rock Cleaning was founded with a simple mission: to provide exceptional cleaning services 
                    that make a real difference in people's lives. We understand that a clean space is more than 
                    just aesthetics—it's about creating environments where people feel comfortable, productive, 
                    and at peace.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                      <p className="text-muted-foreground">
                        We strive for perfection in every cleaning job, no matter how big or small.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Trust</h3>
                      <p className="text-muted-foreground">
                        Our team members are carefully vetted and trained to respect your space and privacy.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                      <p className="text-muted-foreground">
                        We use eco-friendly products and methods that are safe for your family and the environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      Professional, trained cleaning teams
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      Flexible scheduling to fit your needs
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      Satisfaction guaranteed
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      Serving multiple locations across the US
                    </li>
                  </ul>
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

export default AboutUs;

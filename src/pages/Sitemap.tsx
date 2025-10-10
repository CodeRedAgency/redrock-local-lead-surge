import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | Red Rock Cleaning</title>
        <meta name="description" content="Browse our complete sitemap to find all Red Rock Cleaning pages and services." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-12 text-center">Sitemap</h1>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Main Pages</h2>
                  <ul className="space-y-2">
                    <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">About</h2>
                  <ul className="space-y-2">
                    <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link to="/about/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                    <li><Link to="/terms-and-conditions-page" className="hover:text-primary transition-colors">Terms and Conditions</Link></li>
                    <li><Link to="/privacy-policy-page" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Services</h2>
                  <ul className="space-y-2">
                    <li><Link to="/residential-cleaning" className="hover:text-primary transition-colors">Residential Cleaning</Link></li>
                    <li><Link to="/commercial-cleaning" className="hover:text-primary transition-colors">Commercial Cleaning</Link></li>
                    <li><Link to="/blog/standard-cleaning-vs-deep-cleaning" className="hover:text-primary transition-colors">Standard vs Deep Cleaning</Link></li>
                    <li><Link to="/standard-cleaning-services" className="hover:text-primary transition-colors">Standard Cleaning Services</Link></li>
                    <li><Link to="/deep-cleaning-services" className="hover:text-primary transition-colors">Deep Cleaning Services</Link></li>
                    <li><Link to="/airbnb-cleaning-services" className="hover:text-primary transition-colors">Airbnb Cleaning</Link></li>
                    <li><Link to="/post-construction-cleaning-services" className="hover:text-primary transition-colors">Post Construction Cleaning</Link></li>
                    <li><Link to="/move-out-cleaning-services" className="hover:text-primary transition-colors">Move Out Cleaning</Link></li>
                    <li><Link to="/commercial-cleaning-estimator" className="hover:text-primary transition-colors">Commercial Cleaning Cost Estimator</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Locations</h2>
                  <ul className="space-y-2">
                    <li><Link to="/home-south-florida" className="hover:text-primary transition-colors">South Florida</Link></li>
                    <li><Link to="/home-las-vegas" className="hover:text-primary transition-colors">Las Vegas</Link></li>
                    <li><Link to="/home-oahu" className="hover:text-primary transition-colors">Oahu</Link></li>
                    <li><Link to="/home-maui" className="hover:text-primary transition-colors">Maui</Link></li>
                    <li><Link to="/home-columbus-ohio" className="hover:text-primary transition-colors">Columbus Ohio</Link></li>
                    <li><Link to="/home-dallas" className="hover:text-primary transition-colors">Dallas</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Resources</h2>
                  <ul className="space-y-2">
                    <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Hiring</h2>
                  <ul className="space-y-2">
                    <li><Link to="/hiring-requirements" className="hover:text-primary transition-colors">Hiring Requirements</Link></li>
                    <li><Link to="/maidily-app" className="hover:text-primary transition-colors">Maidily Mobile App</Link></li>
                  </ul>
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

export default Sitemap;

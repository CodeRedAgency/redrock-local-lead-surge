import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const locations = [
    {
      name: "South Florida",
      path: "/south-florida",
      phone: "(954) 469-8881",
      email: "office@redrockcleans.com",
      areas: "Miami, Fort Lauderdale, West Palm Beach"
    },
    {
      name: "Las Vegas",
      path: "/las-vegas",
      phone: "(702) 508-0098",
      email: "office.vegas@redrockcleans.com",
      areas: "Las Vegas, Henderson, North Las Vegas"
    },
    {
      name: "Oahu",
      path: "/oahu",
      phone: "(808) 909-8801",
      email: "office.oahu@redrockcleans.com",
      areas: "Honolulu, Pearl City, Kailua"
    },
    {
      name: "Maui",
      path: "/maui",
      phone: "(808) 909-3038",
      email: "office.maui@redrockcleans.com",
      areas: "Kahului, Lahaina, Kihei"
    },
    {
      name: "Columbus Ohio",
      path: "/columbus-ohio",
      phone: "(380) 235-3135",
      email: "office.buckeyes@redrockcleans.com",
      areas: "Columbus, Dublin, Westerville"
    },
    {
      name: "Dallas",
      path: "/dallas",
      phone: "(972) 992-2576",
      email: "office.texas@redrockcleans.com",
      areas: "Dallas, Plano, Fort Worth"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - All Locations | Red Rock Cleaning</title>
        <meta name="description" content="Get in touch with Red Rock Cleaning. Contact information for all our locations including phone numbers and email addresses." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground">
                  Get in touch with your local Red Rock Cleaning team
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((location) => (
                  <div key={location.name} className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-bold mb-6 text-primary">
                      <Link 
                        to={location.path} 
                        className="hover:text-primary/80 transition-colors"
                      >
                        {location.name}
                      </Link>
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Service Areas</p>
                          <p className="text-muted-foreground text-sm">{location.areas}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <a 
                            href={`tel:${location.phone}`} 
                            className="text-primary hover:underline"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <a 
                            href={`mailto:${location.email}`} 
                            className="text-primary hover:underline break-all"
                          >
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-muted/30 p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">General Inquiries</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  For partnership opportunities, franchise information, or general questions:
                </p>
                <div className="space-y-2">
                  <p className="text-lg">
                    Email: <a href="mailto:office@redrockcleans.com" className="text-primary hover:underline">office@redrockcleans.com</a>
                  </p>
                  <p className="text-lg">
                    Phone: <a href="tel:888-805-1733" className="text-primary hover:underline">888-805-1733</a>
                  </p>
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

export default Contact;

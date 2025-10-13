import { Home, Building2, Key, Sparkles, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Professional home cleaning services tailored to your Maui property needs. Regular maintenance cleaning for consistent home cleanliness.",
    link: "/maui/standard-cleaning-services",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Keep your Maui business spotless with our reliable commercial cleaning services. Flexible scheduling to fit your hours.",
    link: "/commercial-cleaning",
  },
  {
    icon: Key,
    title: "Vacation Rental Cleaning",
    description: "Professional turnover cleaning services for vacation rentals on Maui. Fast, thorough, and guest-ready every time.",
    link: "/maui/airbnb-cleaning-services",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive deep cleaning for those hard-to-reach areas. Perfect for seasonal cleaning or special occasions on Maui.",
    link: "/maui/deep-cleaning-services",
  },
];

export const MauiServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services in Maui</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions for every need across Maui
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="hover:shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

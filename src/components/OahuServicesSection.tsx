import { Home, Truck, Key, Sparkles, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Professional home cleaning services tailored to your Oahu property needs. Regular maintenance cleaning for consistent home cleanliness.",
    link: "/oahu/standard-cleaning-services",
  },
  {
    icon: Truck,
    title: "Move Out Cleaning",
    description: "Thorough move-out cleaning services in Oahu. Get your deposit back with our comprehensive cleaning for landlords and tenants.",
    link: "/oahu/move-out-cleaning-services",
  },
  {
    icon: Key,
    title: "Vacation Rental Cleaning",
    description: "Professional turnover cleaning services for vacation rentals in Oahu. Fast, thorough, and guest-ready every time.",
    link: "/oahu/airbnb-cleaning-services",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive deep cleaning for those hard-to-reach areas. Perfect for seasonal cleaning or special occasions in Oahu.",
    link: "/oahu/deep-cleaning-services",
  },
];

export const OahuServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services in Oahu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions for every need across Oahu and Honolulu
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

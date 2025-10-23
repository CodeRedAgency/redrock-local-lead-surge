import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const locations = [
  {
    name: "Las Vegas",
    path: "/las-vegas",
    phone: "(702) 508-0098",
    description: "Professional cleaning in Las Vegas and Henderson",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
  },
  {
    name: "Oahu",
    path: "/oahu",
    phone: "(808) 909-8801",
    description: "Premium cleaning across the island of Oahu",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    name: "Maui",
    path: "/maui",
    phone: "(808) 909-3038",
    description: "Luxury cleaning services throughout Maui",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
  },
  {
    name: "South Florida",
    path: "/south-florida",
    phone: "(954) 469-8881",
    description: "Cleaning services across South Florida",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
  },
  {
    name: "Columbus, Ohio",
    path: "/columbus-ohio",
    phone: "(380) 235-3135",
    description: "Professional cleaning in Columbus and surrounding areas",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
  {
    name: "Dallas",
    path: "/dallas",
    phone: "(972) 992-2576",
    description: "Premium cleaning services throughout Dallas",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
  },
];

export const LocationCards = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t("home.locationCards.title", { defaultValue: "Select Your Location" })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("home.locationCards.subtitle", { defaultValue: "Choose your service area to get started with premium cleaning services" })}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location) => (
            <Link key={location.path} to={location.path} className="group">
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${location.borderColor} hover:border-primary/50 ${location.bgColor} group-hover:bg-white`}>
                <CardContent className="p-8 text-center space-y-6">
                  {/* Location Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${location.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Location Name */}
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${location.textColor} group-hover:text-primary transition-colors duration-300`}>
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {location.description}
                    </p>
                  </div>
                  
                  {/* Phone Number */}
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{location.phone}</span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex justify-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${location.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
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

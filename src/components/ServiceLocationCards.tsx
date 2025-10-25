import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const locations = [
  {
    name: "South Florida",
    path: "/south-florida",
    description: "Fort Lauderdale, Weston & Aventura",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
  },
  {
    name: "Las Vegas",
    path: "/las-vegas",
    description: "Las Vegas & Henderson",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
  },
  {
    name: "Oahu",
    path: "/oahu",
    description: "Honolulu & Pearl City",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    name: "Maui",
    path: "/maui",
    description: "Wailea, Lahaina & Kihei",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
  },
  {
    name: "Columbus, OH",
    path: "/columbus-ohio",
    description: "Columbus, Dublin & Westerville",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
  {
    name: "Dallas",
    path: "/dallas",
    description: "Dallas, Plano & Frisco",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
  },
];

interface ServiceLocationCardsProps {
  servicePath: string;
  serviceTitle: string;
}

export const ServiceLocationCards = ({ servicePath, serviceTitle }: ServiceLocationCardsProps) => {
  const { t, i18n } = useTranslation();
  
  // Helper to get language prefix based on current i18n language
  const getLanguagePrefix = () => {
    return i18n.language.startsWith('es') ? '/es' : '';
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {t("serviceLocations.title", { 
              service: serviceTitle,
              defaultValue: `${serviceTitle} by Location` 
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("serviceLocations.subtitle", { 
              defaultValue: "Select your location to learn more about our services in your area" 
            })}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location) => (
            <Link 
              key={location.path} 
              to={getLanguagePrefix() + location.path + servicePath}
              className="group"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${location.borderColor} hover:border-primary/50 ${location.bgColor} group-hover:bg-white`}>
                <CardContent className="p-6 space-y-4">
                  {/* Location Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${location.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Location Name */}
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${location.textColor} group-hover:text-primary transition-colors duration-300`}>
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {location.description}
                    </p>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {t("serviceLocations.viewDetails", { defaultValue: "View Details" })}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
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


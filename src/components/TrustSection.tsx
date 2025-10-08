import { Shield, Clock, Award, Users } from "lucide-react";
import teamImage from "@/assets/team-trust.jpg";
import productsImage from "@/assets/service-products.jpg";

const features = [
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "Fully insured for your peace of mind",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time, every time guaranteed",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "100% satisfaction or we'll make it right",
  },
  {
    icon: Users,
    title: "Trusted Professionals",
    description: "Background-checked cleaning experts",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Red Rock Cleaning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium cleaning services you can trust
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Team and Products Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img 
              src={teamImage} 
              alt="Red Rock Cleaning professional team"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Professional Team</h3>
                <p className="text-foreground/90">Background-checked experts dedicated to excellence</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img 
              src={productsImage} 
              alt="Premium cleaning products and equipment"
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Premium Products</h3>
                <p className="text-foreground/90">Professional-grade, eco-friendly cleaning supplies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

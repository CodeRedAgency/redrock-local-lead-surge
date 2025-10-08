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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Choose Red Rock Cleaning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium cleaning services you can trust
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary mx-auto group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Team and Products Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-premium)] group cursor-pointer">
            <img 
              src={teamImage} 
              alt="Red Rock Cleaning professional team"
              className="w-full h-[450px] object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent flex items-end p-8 group-hover:from-primary/95 group-hover:via-primary/60 transition-all duration-500">
              <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                <div className="w-12 h-1 bg-accent mb-4 group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-3xl font-bold text-background mb-3">Our Professional Team</h3>
                <p className="text-background/90 text-lg">Background-checked experts dedicated to excellence</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-premium)] group cursor-pointer">
            <img 
              src={productsImage} 
              alt="Premium cleaning products and equipment"
              className="w-full h-[450px] object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent flex items-end p-8 group-hover:from-primary/95 group-hover:via-primary/60 transition-all duration-500">
              <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                <div className="w-12 h-1 bg-accent mb-4 group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-3xl font-bold text-background mb-3">Premium Products</h3>
                <p className="text-background/90 text-lg">Professional-grade, eco-friendly cleaning supplies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

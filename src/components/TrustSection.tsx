import { Shield, Clock, Award, Users } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

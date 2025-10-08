import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroVacation from "@/assets/hero-vacation.jpg";

interface LocationHeroProps {
  location: string;
  title: string;
  subtitle: string;
  phone: string;
  bookingUrl: string;
  imageType?: "residential" | "commercial" | "vacation";
}

const heroImages = {
  residential: heroResidential,
  commercial: heroCommercial,
  vacation: heroVacation,
};

export const LocationHero = ({ location, title, subtitle, phone, bookingUrl, imageType = "residential" }: LocationHeroProps) => {
  const heroImage = heroImages[imageType];
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={`${location} cleaning services`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            {location}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" variant="cta" className="text-lg px-8">
              <a href={bookingUrl}>
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href={`tel:${phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

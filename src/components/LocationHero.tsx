import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

interface LocationHeroProps {
  location: string;
  title: string;
  subtitle: string;
  phone: string;
  bookingUrl: string;
}

export const LocationHero = ({ location, title, subtitle, phone, bookingUrl }: LocationHeroProps) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
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

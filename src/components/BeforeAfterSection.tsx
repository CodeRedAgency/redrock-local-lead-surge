import deepCleaningImage from "@/assets/deep-cleaning.jpg";
import { Button } from "@/components/ui/button";

export const BeforeAfterSection = ({ bookingUrl }: { bookingUrl: string }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience the Red Rock Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Our deep cleaning services transform spaces completely. From dusty and cluttered to 
              sparkling clean, we deliver results that exceed expectations every single time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Thorough deep cleaning of every surface</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Professional-grade equipment and products</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Attention to hard-to-reach areas</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>100% satisfaction guarantee</span>
              </li>
            </ul>
            <Button asChild size="lg" variant="cta" className="mt-6">
              <a href={bookingUrl}>Book Deep Cleaning</a>
            </Button>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={deepCleaningImage} 
              alt="Before and after deep cleaning transformation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

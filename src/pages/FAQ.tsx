import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Red Rock Cleaning</title>
        <meta name="description" content="Find answers to common questions about our cleaning services, pricing, scheduling, and more." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Everything you need to know about our cleaning services
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What services do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer comprehensive residential and commercial cleaning services including regular house cleaning, 
                    deep cleaning, move-in/move-out cleaning, vacation rental cleaning, and office cleaning. Each service 
                    is customizable to meet your specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    How much do your services cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Pricing varies by location and service type. We offer instant quotes through our online calculator. 
                    Simply select your location and answer a few questions about your space to get an accurate price estimate.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Are your cleaning products safe?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. 
                    If you have specific product preferences or allergies, please let us know when booking.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do I need to be home during the cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, you don't need to be present during the cleaning. Many of our clients provide us with access 
                    instructions and go about their day. Our team is fully bonded and insured for your peace of mind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    How do I schedule a cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can easily schedule a cleaning through our online booking system. Select your location, 
                    get a quote, choose your preferred date and time, and complete the booking. We'll send you 
                    a confirmation and reminder before your scheduled service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What if I'm not satisfied with the cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your satisfaction is our priority. If you're not completely happy with our service, please contact us 
                    within 24 hours and we'll make it right. We stand behind our work with a satisfaction guarantee.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do you provide cleaning supplies and equipment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we bring all necessary cleaning supplies and equipment. However, if you prefer we use specific 
                    products or your own supplies, we're happy to accommodate that request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Can I book recurring cleaning services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely! We offer weekly, bi-weekly, and monthly recurring cleaning services. Regular service 
                    clients often receive special pricing and priority scheduling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;

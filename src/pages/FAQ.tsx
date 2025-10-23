import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.faq", { defaultValue: "FAQ - Frequently Asked Questions | Red Rock Cleaning" })}</title>
        <meta name="description" content={t("pageDescriptions.faq", { defaultValue: "Find answers to common questions about our cleaning services, pricing, scheduling, and more." })} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-center">{t("pageHeadings.faq.h1", { defaultValue: "Frequently Asked Questions" })}</h1>
              <p className="text-xl text-muted-foreground text-center mb-12">
                {t("pageHeadings.faq.subtitle", { defaultValue: "Everything you need to know about our cleaning services" })}
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is included in a standard cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our standard cleaning covers all essential areas of your home or apartment, including:
                    <ul className="mt-2 space-y-1">
                      <li>• Cleaning and vacuuming floors</li>
                      <li>• Cleaning bathrooms</li>
                      <li>• Cleaning the kitchen</li>
                      <li>• Cleaning the living room</li>
                      <li>• Dusting surfaces</li>
                    </ul>
                    Additional services, such as cleaning inside the fridge or oven, can be selected during the booking process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Is a long-term contract required for service?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, we offer flexible services without long-term contracts or obligations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    How long have you been cleaning homes?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We have been providing professional house cleaning services since 2019.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Are you insured?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, Red Rock Cleaning is fully insured with $1,000,000 liability insurance to protect your home and provide peace of mind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What areas do you service?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide cleaning services in the following locations:
                    <ul className="mt-2 space-y-1">
                      <li>• Fort Lauderdale, FL (South Florida)</li>
                      <li>• Las Vegas, NV</li>
                      <li>• Honolulu, HI (Oahu)</li>
                      <li>• Maui, HI</li>
                      <li>• Dallas, TX</li>
                      <li>• Columbus, OH</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What is green home cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer eco-friendly house cleaning at no extra charge, using natural cleaning products instead of harsh chemicals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do you provide the cleaning supplies?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we furnish all necessary cleaning supplies free of charge.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What should I expect on my first appointment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our team will arrive equipped with all necessary supplies and equipment. The first appointment may take longer as we familiarize ourselves with your home. Subsequent appointments will be more efficient.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do I need to do anything before you arrive?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To maximize efficiency, we recommend straightening up as much as possible so our cleaners can focus on cleaning rather than organizing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Will I have the same cleaning person each visit?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We strive to provide the same cleaning professional for each visit. If your regular cleaner is unavailable, we will assign a suitable replacement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do I need to be home during the cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    It's up to you. Some clients prefer to be home, while others schedule cleanings while they're away. Either way, you can expect superior service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Can I skip or reschedule an appointment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, please provide at least 24 hours' notice to reschedule or cancel an appointment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    How will you enter my home on the scheduled day?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We can enter your home in the way you feel most comfortable:
                    <ul className="mt-2 space-y-1">
                      <li>• You may provide us with a key</li>
                      <li>• Leave a key under a doormat on the day of cleaning</li>
                      <li>• Provide us with the garage code</li>
                      <li>• Leave the door unlocked on the day of cleaning</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    What if I am not satisfied with my cleaning?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your satisfaction is very important to us. If you're not satisfied, please contact us within 24 hours, and we will return to re-clean the area at no cost to you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    Do you offer house cleaning gift certificates?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, you can purchase cleaning gift certificates for various occasions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="bg-card px-6 rounded-lg">
                  <AccordionTrigger className="text-lg font-semibold">
                    How and when do I pay for my cleaning services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Payment is required at the time of service. We accept most major credit cards, debit cards, Zelle, and cash.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-bold text-center mb-4">Eco-Quality Service – It's Our Guarantee</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Professional</h3>
                    <p className="text-sm text-muted-foreground">Trained & experienced cleaners</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Affordable</h3>
                    <p className="text-sm text-muted-foreground">Competitive pricing</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Screened</h3>
                    <p className="text-sm text-muted-foreground">Background checked staff</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Secured</h3>
                    <p className="text-sm text-muted-foreground">$1M liability insurance</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Bonded</h3>
                    <p className="text-sm text-muted-foreground">Fully bonded team</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Licensed</h3>
                    <p className="text-sm text-muted-foreground">Properly licensed business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQ;

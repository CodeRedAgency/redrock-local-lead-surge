import { MauiNavigation } from "@/components/MauiNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea contractors and homeowners trust our professional post construction cleaning service to transform their luxury construction sites into pristine, move-in ready properties. We handle everything from debris removal to final detailing with meticulous attention to detail for this prestigious resort area.",
    faq: [
      {
        question: "How long does post construction cleaning take in Wailea?",
        answer: "Post construction cleaning typically takes 1-3 days depending on project size and scope. We'll provide a detailed timeline during your free consultation."
      },
      {
        question: "Do you work with Wailea contractors and builders?",
        answer: "Yes, we work directly with contractors, builders, and construction companies in Wailea to provide professional post construction cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Wailea construction site into a beautiful, move-in ready home. Their attention to detail and professional approach exceeded our expectations!",
      author: "Sarah M., Wailea Contractor"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena developers and homeowners rely on our comprehensive post construction cleaning service to prepare their new builds and renovations for occupancy. We ensure every surface is pristine and safe for the natural beauty of this area.",
    faq: [
      {
        question: "Do you handle both residential and commercial post construction cleaning in Makena?",
        answer: "Yes, we provide post construction cleaning services for both residential and commercial properties in Makena, from single-family homes to large developments."
      },
      {
        question: "Can you coordinate with Makena construction schedules?",
        answer: "Absolutely! We work closely with Makena construction teams to schedule cleaning services around project timelines and deadlines."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Makena development was exceptional. Professional, thorough, and our clients were amazed by the final results!",
      author: "Michael R., Makena Developer"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei contractors and homeowners depend on our professional post construction cleaning service to prepare their properties for final inspection and occupancy. We understand the high standards expected in this growing community.",
    faq: [
      {
        question: "Do you service both residential and commercial post construction cleaning in Kihei?",
        answer: "Yes, we specialize in post construction cleaning for both residential and commercial properties with high-end finishes and premium materials in Kihei."
      },
      {
        question: "How do you ensure quality in Kihei post construction cleaning?",
        answer: "Every Kihei post construction cleaning follows our detailed checklist and includes multiple quality inspections to ensure nothing is missed."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent post construction cleaning for our Kihei home. Professional, thorough, and the results were absolutely stunning!",
      author: "Jennifer L., Kihei Homeowner"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua contractors and developers trust our reliable post construction cleaning service to prepare their luxury projects for final delivery. We understand the importance of meeting deadlines in this prestigious resort community.",
    faq: [
      {
        question: "What makes Kapalua post construction cleaning different?",
        answer: "Kapalua post construction cleaning addresses the unique challenges of luxury resort construction, including high-end finishes, tight deadlines, and premium quality standards expected in this exclusive area."
      },
      {
        question: "Do you offer same-day post construction cleaning in Kapalua?",
        answer: "Yes, we can often accommodate urgent post construction cleaning requests for Kapalua properties, subject to availability and project scope."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to post construction cleaning service for Kapalua projects. Reliable, professional, and our clients are always impressed!",
      author: "Lisa W., Kapalua Contractor"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali contractors and homeowners enjoy our comprehensive post construction cleaning service that prepares their properties for final inspection and move-in. Perfect for the growing Ka'anapali construction market.",
    faq: [
      {
        question: "Do you work with family-owned construction companies in Ka'anapali?",
        answer: "Yes, we're experienced with family-owned construction businesses and can work around your family's schedule while maintaining professional cleaning standards."
      },
      {
        question: "Can you customize post construction cleaning for Ka'anapali properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Ka'anapali property's unique features and specific construction requirements."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Ka'anapali home was wonderful. Professional, reliable, and our family was thrilled with the final results!",
      author: "Amanda T., Ka'anapali Homeowner"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina developers and contractors trust our professional post construction cleaning service to prepare their new builds and renovations for occupancy. We provide reliable service that meets project deadlines in this historic town.",
    faq: [
      {
        question: "How do you handle large-scale post construction cleaning in Lahaina?",
        answer: "We're experienced with large-scale projects and can deploy multiple teams to handle extensive post construction cleaning efficiently and on schedule."
      },
      {
        question: "What if I need to reschedule my Lahaina post construction cleaning?",
        answer: "We're flexible with rescheduling and work closely with Lahaina contractors to accommodate project changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent post construction cleaning for our Lahaina developments. Consistent quality and our projects are always ready on time!",
      author: "David K., Lahaina Developer"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville contractors and homeowners depend on our reliable post construction cleaning service to prepare their properties for final delivery. We provide consistent, professional cleaning that ensures client satisfaction.",
    faq: [
      {
        question: "Do you service both residential and commercial post construction cleaning in Spreckelsville?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of construction projects including residential homes, commercial buildings, and mixed-use developments."
      },
      {
        question: "How do you ensure quality in Spreckelsville post construction cleaning?",
        answer: "Every Spreckelsville post construction cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Spreckelsville project was exceptional. Professional, thorough, and our clients were amazed by the transformation!",
      author: "Robert H., Spreckelsville Contractor"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia contractors and homeowners rely on our professional post construction cleaning service to prepare their properties for occupancy. We provide reliable service that helps meet project deadlines and client expectations.",
    faq: [
      {
        question: "Do you work around Pa'ia construction schedules?",
        answer: "Yes, we can schedule post construction cleaning around construction timelines and work commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Pa'ia post construction cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Pa'ia construction projects. Their reliable service helps us meet deadlines and exceed client expectations!",
      author: "Maria S., Pa'ia Contractor"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau contractors and developers enjoy our comprehensive post construction cleaning service that prepares their properties for final inspection and occupancy. Reliable service for consistent project success in this scenic area.",
    faq: [
      {
        question: "Do you offer competitive rates for Kuau post construction cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Kuau post construction cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your post construction cleaning service in Kuau?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality post construction cleaning services in Kuau."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Kuau project was thorough and affordable. Great value and our clients were extremely satisfied!",
      author: "Carlos M., Kuau Developer"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku contractors and homeowners depend on our professional post construction cleaning service to prepare their luxury properties for final delivery. We understand the high standards expected in this prestigious mountain area.",
    faq: [
      {
        question: "Do you handle luxury properties for post construction cleaning in Ha'iku?",
        answer: "Yes, we specialize in luxury post construction cleaning and are experienced with high-end finishes, premium materials, and luxury property standards."
      },
      {
        question: "Can you accommodate Ha'iku HOA requirements for post construction cleaning?",
        answer: "Absolutely! We're familiar with Ha'iku HOA guidelines and ensure full compliance for post construction cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional post construction cleaning for our Ha'iku luxury home. Perfect service for our high-end property and discerning clients!",
      author: "James L., Ha'iku Homeowner"
    }
  }
];

const PostConstructionCleaningMauiPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setOpenItem(hash);
      // Scroll to the accordion section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Listen for hash changes (when user navigates from dropdown)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && neighborhoods.some(n => n.id === hash)) {
        setOpenItem(hash);
        // Scroll to the accordion section
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Helmet>
        <title>Post Construction Cleaning Service Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional post construction cleaning on Maui. Red Rock Cleans handles all construction cleanup for new builds and renovations in Wailea, Lahaina, and beyond. Get a detailed quote today!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <MauiNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-maui/sign-in" bookingUrl="/book-now-maui" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-commercial.jpg" 
                alt="Professional post construction cleaning service in a new Maui build with beautiful Hawaiian landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('maui.post.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your dusty worksite into a pristine, move-in ready property that shines. Our professional post construction cleaning service helps Maui contractors, developers, and homeowners deliver flawless final products that exceed client expectations and ensure safety.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('maui.post.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('maui.post.quote')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Detailed Post Construction Cleanup Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('maui.post.processTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Debris Removal & Initial Cleanup
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Removal of all debris and construction materials
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean up fine dust and red dirt from all surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Remove protective coverings and tape
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean all tools and equipment marks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Vacuum and sweep all surfaces thoroughly
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Window & Track Cleaning & Final Polish
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window and track cleaning throughout
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Polish fixtures and hardware to perfection
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all surfaces and high-touch areas
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final walkthrough and quality inspection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* From Worksite to Paradise */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('maui.post.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ensuring Safety</h3>
                    <p className="text-muted-foreground">
                      Our thorough cleaning process removes all construction debris, dust, and potential hazards, ensuring the property is safe for occupancy and final inspections.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock4 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Saving Contractors Valuable Time</h3>
                    <p className="text-muted-foreground">
                      Let us handle the detailed cleanup while you focus on other project priorities. Our efficient process helps contractors meet deadlines and stay on schedule.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Delivering a Flawless Final Product</h3>
                    <p className="text-muted-foreground">
                      Deliver a pristine, showcase-ready property that exceeds client expectations and reflects the quality of your construction work on Maui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas We Serve */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Areas We Serve on Maui
                </h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {neighborhoods.map((neighborhood) => (
                    <AccordionItem 
                      key={neighborhood.id} 
                      value={neighborhood.id} 
                      id={neighborhood.id}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <h3 className="text-lg font-semibold">{neighborhood.name}</h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            Professional post construction cleaning services
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {neighborhood.description}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold">Local FAQ</h4>
                            {neighborhood.faq.map((item, index) => (
                              <div key={index} className="border-l-2 border-primary/20 pl-4">
                                <h5 className="font-medium text-sm">{item.question}</h5>
                                <p className="text-sm text-muted-foreground mt-1">{item.answer}</p>
                              </div>
                            ))}
                          </div>

                          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                            "{neighborhood.testimonial.text}"
                            <footer className="mt-2 text-sm font-medium not-italic">
                              — {neighborhood.testimonial.author}
                            </footer>
                          </blockquote>

                          <Button asChild className="w-full">
                            <Link to="/book-now-maui">
                              Schedule Your {neighborhood.name} Post Construction Cleaning
                            </Link>
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Other Cleaning Services */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Other Cleaning Services for Your Property on Maui
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond post construction cleaning, we offer specialized services to meet all your Maui property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/maui/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/maui/airbnb-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Airbnb Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional turnover cleaning for vacation rental properties.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What's the difference between a rough clean and a final clean?</h3>
                    <p className="text-muted-foreground">
                      A rough clean removes large debris and construction materials, while a final clean involves detailed dust removal, polishing, and fine detailing to make the property move-in ready and inspection-ready.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for post construction cleaning in Wailea?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning costs in Wailea vary by project size, complexity, and specific requirements. Contact us for a detailed, customized quote based on your project needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you work directly with contractors on Maui?</h3>
                    <p className="text-muted-foreground">
                      Yes, we work directly with contractors, builders, developers, and construction companies throughout Maui. We can coordinate with your project timeline and provide detailed cleaning services that meet your specifications.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How long does post construction cleaning take on Maui?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning typically takes 1-3 days depending on project size and complexity. We provide rough clean, final clean, and touch-up phases to ensure your property is completely move-in ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Worksite?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of successful Maui contractors, developers, and homeowners who trust Red Rock Cleans for professional post construction cleaning that delivers flawless results and exceeds client expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-maui">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Post Construction Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/maui-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      Get Your Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PostConstructionCleaningMauiPage;

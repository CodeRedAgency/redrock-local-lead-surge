import { ColumbusNavigation } from "@/components/ColumbusNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer, Award, Wrench, Target, Layers, KeyRound, FileCheck, ArrowRight, Building2, HardHat as HardHatIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const neighborhoods = [
  {
    id: "dublin",
    name: "Dublin",
    description: "Dublin contractors, developers, and homeowners trust our expert post construction cleaning service to transform dusty worksites into pristine, move-in ready properties. We understand the high standards expected in this prestigious area and provide comprehensive cleanup that meets all inspection requirements.",
    faq: [
      {
        question: "What's the difference between a rough clean and a final clean in Dublin?",
        answer: "A rough clean removes major debris and dust, while a final clean is the detailed finish work including polishing fixtures, cleaning windows, and ensuring every surface is move-in ready. We can provide both phases or just the final clean depending on your needs."
      },
      {
        question: "Do you work with commercial developers in Dublin?",
        answer: "Yes, we specialize in both residential and commercial post construction cleaning in Dublin, working with contractors, developers, and property managers to ensure projects are completed to the highest standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Dublin construction site into a beautiful, move-in ready home. Their attention to detail and professional approach saved us weeks of final cleanup work!",
      author: "Sarah M., Dublin Contractor"
    }
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    description: "Upper Arlington contractors and developers rely on our professional post construction cleaning service to deliver flawless final products to their clients. We provide comprehensive cleanup that meets the high standards expected in this exclusive neighborhood where quality is paramount.",
    faq: [
      {
        question: "Do you handle luxury construction projects for post construction cleaning in Upper Arlington?",
        answer: "Yes, we specialize in luxury construction cleanup and are experienced with high-end finishes, premium materials, and the detailed attention required for Upper Arlington projects."
      },
      {
        question: "Can you work around tight construction schedules in Upper Arlington?",
        answer: "Absolutely! We understand construction timelines and can coordinate our cleanup services around your project schedule to ensure timely completion and client handover."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Upper Arlington luxury project was exceptional. Professional, thorough, and our clients were amazed by the final result!",
      author: "Michael R., Upper Arlington Developer"
    }
  },
  {
    id: "powell",
    name: "Powell",
    description: "Powell contractors and homeowners depend on our expert post construction cleaning service to transform construction sites into beautiful, move-in ready properties. We provide comprehensive cleanup that fits perfectly with busy project schedules and ensures client satisfaction.",
    faq: [
      {
        question: "How long does post construction cleaning take in Powell?",
        answer: "Post construction cleaning typically takes 1-3 days depending on project size and complexity. We provide detailed time estimates during your consultation to ensure proper scheduling around your project timeline."
      },
      {
        question: "Do you handle both residential and commercial construction cleanup in Powell?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of projects including residential homes, commercial buildings, and mixed-use developments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent post construction cleaning for our Powell residential project. They worked efficiently around our timeline and the final result exceeded our expectations!",
      author: "Jennifer L., Powell Contractor"
    }
  },
  {
    id: "lewis-center",
    name: "Lewis Center",
    description: "Lewis Center contractors and developers trust our comprehensive post construction cleaning service to deliver pristine, move-in ready properties. We understand the importance of meeting project deadlines and provide thorough cleanup for growing developments in this thriving community.",
    faq: [
      {
        question: "Is post construction cleaning suitable for large-scale developments in Lewis Center?",
        answer: "Yes, post construction cleaning is perfect for large-scale developments as it ensures every unit meets the same high standards. We can handle multiple properties and coordinate cleanup across entire development projects."
      },
      {
        question: "Do you work with both new construction and renovation projects in Lewis Center?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of projects including new construction, major renovations, and remodeling projects."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lewis Center development project. Their systematic approach and attention to detail ensured every home was move-in ready!",
      author: "Lisa W., Lewis Center Developer"
    }
  },
  {
    id: "worthington",
    name: "Worthington",
    description: "Worthington contractors and developers enjoy our comprehensive post construction cleaning service that transforms construction sites into showcase properties. Perfect for the upscale Worthington market where projects require meticulous attention to detail and flawless final presentation.",
    faq: [
      {
        question: "Do you work with historic renovation projects for post construction cleaning in Worthington?",
        answer: "Yes, we're experienced with historic renovation cleanup and understand the special care required for older homes, including preserving original features while achieving thorough cleaning results."
      },
      {
        question: "Can post construction cleaning help with property sales in Worthington?",
        answer: "Absolutely! Our thorough post construction cleaning prepares properties for showings and sales, ensuring they meet the high standards expected in the competitive Worthington market."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Worthington renovation project was fantastic. They really understood the historic home's needs and delivered a flawless final result!",
      author: "Amanda T., Worthington Contractor"
    }
  },
  {
    id: "new-albany",
    name: "New Albany",
    description: "New Albany contractors and developers trust our thorough post construction cleaning service to deliver pristine, move-in ready properties. We provide comprehensive cleanup that meets the demands of this growing area where quality construction and attention to detail are essential.",
    faq: [
      {
        question: "How do you handle large-scale post construction cleaning in New Albany?",
        answer: "We're experienced with large-scale projects and can deploy multiple teams to handle extensive post construction cleaning efficiently while maintaining quality standards and meeting project deadlines."
      },
      {
        question: "Do you work with commercial developers in New Albany?",
        answer: "Yes, we work with commercial developers in New Albany, providing post construction cleaning services for office buildings, retail spaces, and mixed-use developments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent post construction cleaning for our New Albany commercial project. They really understood our timeline and delivered exceptional results!",
      author: "David K., New Albany Developer"
    }
  },
  {
    id: "bexley",
    name: "Bexley",
    description: "Bexley contractors and developers depend on our comprehensive post construction cleaning service to deliver pristine, move-in ready properties. We provide thorough cleanup that respects the unique character of Bexley homes while meeting all project requirements.",
    faq: [
      {
        question: "Do you service both historic and modern construction projects for post construction cleaning in Bexley?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of projects including historic renovations, modern construction, and mixed architectural styles with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Bexley post construction cleaning?",
        answer: "Every Bexley post construction cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results that meet project standards."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Bexley project was exceptional. They paid such attention to detail and our client was thrilled with the final result!",
      author: "Robert H., Bexley Contractor"
    }
  },
  {
    id: "german-village",
    name: "German Village",
    description: "German Village contractors and developers rely on our thorough post construction cleaning service to deliver pristine, move-in ready properties. We provide comprehensive cleanup that helps maintain the charm of this historic community while meeting all project requirements.",
    faq: [
      {
        question: "Do you work around German Village construction schedules?",
        answer: "Yes, we can schedule post construction cleaning around your project timeline and construction schedules while maintaining our thorough service standards and attention to detail."
      },
      {
        question: "What's your approach to historic renovation post construction cleaning in German Village?",
        answer: "We use gentle yet effective methods appropriate for historic homes, paying special attention to preserving original features while achieving thorough cleaning results that meet project requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our German Village historic renovation. They maintained the character while ensuring our project was move-in ready!",
      author: "Maria S., German Village Contractor"
    }
  },
  {
    id: "short-north",
    name: "Short North",
    description: "Short North contractors and developers trust our comprehensive post construction cleaning service to deliver pristine, move-in ready properties. We understand the unique challenges of urban construction and provide thorough cleanup for this vibrant arts district.",
    faq: [
      {
        question: "Do you service both residential and commercial construction projects for post construction cleaning in Short North?",
        answer: "Yes, we specialize in post construction cleaning for both residential and commercial projects in Short North, adapting our service to your specific project type and requirements."
      },
      {
        question: "How do you handle quick turnovers for post construction cleaning in Short North?",
        answer: "Every Short North post construction cleaning is optimized for efficiency while maintaining thoroughness, using streamlined processes and experienced teams to meet tight project deadlines."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent post construction cleaning for our Short North mixed-use project. Professional, thorough, and they met our tight deadline!",
      author: "Jennifer L., Short North Developer"
    }
  },
  {
    id: "victorian-village",
    name: "Victorian Village",
    description: "Victorian Village contractors and developers enjoy our comprehensive post construction cleaning service that transforms construction sites into showcase properties. Perfect for the charming Victorian Village market where historic renovations require special care and attention to detail.",
    faq: [
      {
        question: "Do you work with Victorian-era renovation projects for post construction cleaning in Victorian Village?",
        answer: "Yes, we're experienced with Victorian-era project cleanup and understand the special care required for ornate details, original woodwork, and period features."
      },
      {
        question: "Can you customize post construction cleaning for Victorian Village properties?",
        answer: "Absolutely! We can adapt our post construction cleaning checklist based on your Victorian Village project's unique architectural features and specific requirements."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Victorian Village renovation was wonderful. They really understood historic homes and preserved all the beautiful details while delivering a flawless result!",
      author: "Amanda T., Victorian Village Contractor"
    }
  },
  {
    id: "hillard",
    name: "Hilliard",
    description: "Hilliard contractors and developers trust our thorough post construction cleaning service to deliver pristine, move-in ready properties. We provide comprehensive cleanup that meets the demands of this growing area where quality construction and attention to detail are essential.",
    faq: [
      {
        question: "How do you handle large-scale post construction cleaning in Hilliard?",
        answer: "We're experienced with large-scale projects and can deploy multiple teams to handle extensive post construction cleaning efficiently while maintaining quality standards and meeting project deadlines."
      },
      {
        question: "Do you work with both residential and commercial projects in Hilliard?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of projects including residential developments, commercial buildings, and mixed-use projects."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provided excellent post construction cleaning for our Hilliard development project. They really understood our timeline and delivered exceptional results across all units!",
      author: "David K., Hilliard Developer"
    }
  },
  {
    id: "westerville",
    name: "Westerville",
    description: "Westerville contractors and developers depend on our comprehensive post construction cleaning service to deliver pristine, move-in ready properties. We provide thorough cleanup that ensures complete satisfaction and meets all project requirements in this thriving community.",
    faq: [
      {
        question: "Do you service both residential and commercial construction projects for post construction cleaning in Westerville?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of projects including residential homes, commercial buildings, and mixed-use developments with appropriate care for each."
      },
      {
        question: "How do you ensure thoroughness in Westerville post construction cleaning?",
        answer: "Every Westerville post construction cleaning follows our detailed checklist and includes comprehensive quality assurance to guarantee thorough, satisfactory results that meet all project standards."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Westerville project was exceptional. Thorough, professional, and our clients were amazed by the final presentation!",
      author: "Robert H., Westerville Developer"
    }
  }
];

const PostConstructionCleaningColumbusOhioPage = () => {
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
        <title>Post Construction Cleaning Columbus | Red Rock Cleans</title>
        <meta name="description" content="Professional post construction cleaning in Columbus, OH. Red Rock Cleans handles construction cleanup for new builds and renovations in Dublin, Upper Arlington, and beyond. Get a detailed quote!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <ColumbusNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-columbus-ohio/sign-in" bookingUrl="/book-now-columbus-ohio" />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/hero-residential.jpg" 
                alt="Professional post construction cleaning service in a Columbus Ohio home with construction equipment"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('columbus.post.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Transform dusty worksites into pristine, move-in ready properties with our comprehensive post construction cleaning service. Perfect for contractors, developers, and homeowners in the growing Columbus area, ensuring every project meets the highest standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('columbus.post.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/columbus-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('columbus.post.quote')}
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.post.processTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <HardHatIcon className="w-6 h-6 text-primary mr-3" />
                      Debris Removal & Dust Cleanup
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Removal of construction debris and materials
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Fine drywall dust removal from all surfaces
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning of air vents and HVAC systems
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Dust removal from light fixtures and fans
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cleaning of all electrical outlets and switches
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Building2 className="w-6 h-6 text-primary mr-3" />
                      Final Polish & Inspection Ready
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window and track cleaning and polishing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Fixture polishing and hardware cleaning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Cabinet and drawer interior cleaning
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Appliance cleaning and testing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Final inspection and touch-up cleaning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* From Worksite to Showcase Home */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.post.benefitsTitle')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ensuring Safety</h3>
                    <p className="text-muted-foreground">
                      Our post construction cleaning removes hazardous dust, debris, and construction materials that can pose health risks, creating a safe environment for families and workers in Columbus.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Saving Contractors Time</h3>
                    <p className="text-muted-foreground">
                      Let us handle the final cleanup while you focus on project completion. Our efficient service saves contractors valuable time on final walkthroughs and client handovers.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Flawless Final Product</h3>
                    <p className="text-muted-foreground">
                      Deliver a pristine, move-in ready property to your clients. Our thorough cleaning ensures every detail meets the high standards expected in upscale Columbus neighborhoods.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.post.areasTitle')}</h2>
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
                            <Link to="/book-now-columbus-ohio">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('columbus.post.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond post construction cleaning, we offer specialized services to meet all your Columbus property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/columbus-ohio/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular recurring cleaning service for maintaining your home's cleanliness week after week.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive deep cleaning for those hard-to-reach areas and intensive cleaning needs.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/columbus-ohio/airbnb-cleaning-services/" className="group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('columbus.post.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What's the difference between a rough clean and a final clean?</h3>
                    <p className="text-muted-foreground">
                      A rough clean removes major debris and dust, while a final clean is the detailed finish work including polishing fixtures, cleaning windows, and ensuring every surface is move-in ready. We can provide both phases or just the final clean depending on your project needs.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for post construction cleaning in the Columbus area?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning costs in Columbus vary by project size, complexity, and specific requirements. Contact us for a detailed, customized quote based on your construction project's needs and timeline.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you work with commercial developers in Dublin and New Albany?</h3>
                    <p className="text-muted-foreground">
                      Yes, we work with commercial developers throughout Columbus including Dublin and New Albany, providing post construction cleaning services for office buildings, retail spaces, and mixed-use developments.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I schedule post construction cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend scheduling your post construction cleaning 1-2 weeks in advance to ensure availability, especially during peak construction seasons. We can also accommodate last-minute requests when possible.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('columbus.post.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied Columbus contractors and developers who trust Red Rock Cleans for expert post construction cleaning that delivers flawless results and exceeds client expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-columbus-ohio">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Construction Cleanup Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/columbus-calculator">
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

export default PostConstructionCleaningColumbusOhioPage;

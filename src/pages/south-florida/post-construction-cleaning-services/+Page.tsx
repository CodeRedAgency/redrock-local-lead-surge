import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Hreflang from "@/components/Hreflang";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura contractors and developers trust our professional post construction cleaning service to prepare their luxury properties for final delivery. We understand the high standards expected in this prestigious area.",
    faq: [
      {
        question: "Do you handle luxury properties for post construction cleaning in Aventura?",
        answer: "Yes, we specialize in luxury post construction cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Aventura."
      },
      {
        question: "How long does post construction cleaning take in Aventura?",
        answer: "Post construction cleaning typically takes 1-3 days depending on project size and scope. We'll provide a detailed timeline during your free consultation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Aventura construction site into a beautiful, move-in ready luxury home. Their attention to detail exceeded our expectations!",
      author: "Sarah M., Aventura Developer"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City contractors and homeowners rely on our comprehensive post construction cleaning service to prepare their new builds and renovations for occupancy. We ensure every surface is pristine and safe.",
    faq: [
      {
        question: "Do you handle both residential and commercial post construction cleaning in Cooper City?",
        answer: "Yes, we provide post construction cleaning services for both residential and commercial properties in Cooper City, from single-family homes to large developments."
      },
      {
        question: "Can you coordinate with Cooper City construction schedules?",
        answer: "Absolutely! We work closely with Cooper City construction teams to schedule cleaning services around project timelines and deadlines."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Cooper City development was exceptional. Professional, thorough, and our clients were amazed by the final results!",
      author: "Michael R., Cooper City Contractor"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach contractors and homeowners depend on our professional post construction cleaning service to thoroughly restore their properties. Our intensive cleaning process creates a fresh, healthy living environment.",
    faq: [
      {
        question: "Do you service both houses and condos for post construction cleaning in Dania Beach?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of properties including houses, condos, and townhomes in Dania Beach."
      },
      {
        question: "How do you ensure quality in Dania Beach post construction cleaning?",
        answer: "Every Dania Beach post construction cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Dania Beach project was exceptional. Professional, thorough, and our clients were amazed by the transformation!",
      author: "Robert H., Dania Beach Contractor"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie contractors and developers trust our reliable post construction cleaning service to prepare their projects for final delivery. We understand the importance of meeting deadlines in the competitive Davie construction market.",
    faq: [
      {
        question: "What makes Davie post construction cleaning different?",
        answer: "Davie post construction cleaning addresses the unique challenges of suburban construction, including family-oriented developments and diverse property types."
      },
      {
        question: "Do you offer same-day post construction cleaning in Davie?",
        answer: "Yes, we can often accommodate urgent post construction cleaning requests for Davie properties, subject to availability and project scope."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to post construction cleaning service for Davie projects. Reliable, professional, and our clients are always impressed!",
      author: "Lisa W., Davie Contractor"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale contractors and developers trust our professional post construction cleaning service to prepare their projects for final delivery. We understand the importance of meeting deadlines in the busy Fort Lauderdale construction market.",
    faq: [
      {
        question: "Do you work with commercial developers in Fort Lauderdale?",
        answer: "Yes, we work directly with commercial developers, contractors, and construction companies throughout Fort Lauderdale and Broward County."
      },
      {
        question: "What is the average price for post construction cleaning in Fort Lauderdale?",
        answer: "Post construction cleaning costs vary based on project size, square footage, and specific requirements. Contact us for a detailed quote tailored to your Fort Lauderdale project."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Fort Lauderdale construction business with their reliable cleaning service. Our clients consistently praise the cleanliness!",
      author: "Jennifer L., Fort Lauderdale Developer"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach contractors and homeowners enjoy our comprehensive post construction cleaning service that prepares their properties for final inspection and occupancy. Perfect for the growing Hallandale Beach construction market.",
    faq: [
      {
        question: "Do you work with family-owned construction companies in Hallandale Beach?",
        answer: "Yes, we're experienced with family-owned construction businesses and can work around your family's schedule while maintaining professional cleaning standards."
      },
      {
        question: "Can you customize post construction cleaning for Hallandale Beach properties?",
        answer: "Absolutely! We can adapt our cleaning checklist based on your Hallandale Beach property's unique features and specific construction requirements."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Hallandale Beach home was wonderful. Professional, reliable, and our family was thrilled with the final results!",
      author: "Amanda T., Hallandale Beach Homeowner"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood contractors and developers trust our professional post construction cleaning service to prepare their projects for final delivery. We understand the unique challenges of the Hollywood construction market.",
    faq: [
      {
        question: "How do you handle large-scale post construction cleaning in Hollywood?",
        answer: "We're experienced with large-scale projects and can deploy multiple teams to handle extensive post construction cleaning efficiently and on schedule."
      },
      {
        question: "What if I need to reschedule my Hollywood post construction cleaning?",
        answer: "We're flexible with rescheduling and work closely with Hollywood contractors to accommodate project changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent post construction cleaning for our Hollywood developments. Consistent quality and our projects are always ready on time!",
      author: "David K., Hollywood Developer"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas contractors and developers depend on our professional post construction cleaning service to prepare their luxury properties for final delivery. We understand the high standards expected in this prestigious area.",
    faq: [
      {
        question: "Do you handle luxury properties for post construction cleaning in Las Olas?",
        answer: "Yes, we specialize in luxury post construction cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Las Olas."
      },
      {
        question: "Can you accommodate Las Olas HOA requirements for post construction cleaning?",
        answer: "Absolutely! We're familiar with Las Olas HOA guidelines and ensure full compliance for post construction cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional post construction cleaning for our Las Olas luxury property. Perfect service for our high-end development!",
      author: "James L., Las Olas Developer"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes contractors and homeowners rely on our professional post construction cleaning service to prepare their properties for occupancy. We provide reliable service that helps meet project deadlines and client expectations.",
    faq: [
      {
        question: "Do you work around Lauderdale Lakes construction schedules?",
        answer: "Yes, we can schedule post construction cleaning around construction timelines and work commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Lauderdale Lakes post construction cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lauderdale Lakes construction projects. Their reliable service helps us meet deadlines and exceed client expectations!",
      author: "Maria S., Lauderdale Lakes Contractor"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill contractors and developers enjoy our comprehensive post construction cleaning service that prepares their properties for final inspection and occupancy. Reliable service for consistent project success.",
    faq: [
      {
        question: "Do you offer competitive rates for Lauderhill post construction cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Lauderhill post construction cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your post construction cleaning service in Lauderhill?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality post construction cleaning services in Lauderhill."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Lauderhill project was thorough and affordable. Great value and our clients were extremely satisfied!",
      author: "Carlos M., Lauderhill Developer"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate contractors and homeowners depend on our professional post construction cleaning service to prepare their properties for final delivery. We provide reliable service that meets project deadlines.",
    faq: [
      {
        question: "Do you service both houses and condos for post construction cleaning in Margate?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of properties including houses, condos, and townhomes in Margate."
      },
      {
        question: "How do you ensure quality in Margate post construction cleaning?",
        answer: "Every Margate post construction cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Margate project was exceptional. Professional, thorough, and our clients were amazed by the transformation!",
      author: "Robert H., Margate Contractor"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar contractors and developers trust our professional post construction cleaning service to prepare their projects for final delivery. We understand the importance of meeting deadlines in the competitive Miramar construction market.",
    faq: [
      {
        question: "What makes Miramar post construction cleaning different?",
        answer: "Miramar post construction cleaning addresses the unique challenges of suburban construction, including family-oriented developments and diverse property types."
      },
      {
        question: "Do you offer same-day post construction cleaning in Miramar?",
        answer: "Yes, we can often accommodate urgent post construction cleaning requests for Miramar properties, subject to availability and project scope."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to post construction cleaning service for Miramar projects. Reliable, professional, and our clients are always impressed!",
      author: "Lisa W., Miramar Contractor"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale contractors and homeowners rely on our professional post construction cleaning service to prepare their properties for occupancy. We provide reliable service that helps meet project deadlines and client expectations.",
    faq: [
      {
        question: "Do you work around North Lauderdale construction schedules?",
        answer: "Yes, we can schedule post construction cleaning around construction timelines and work commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for North Lauderdale post construction cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our North Lauderdale construction projects. Their reliable service helps us meet deadlines and exceed client expectations!",
      author: "Maria S., North Lauderdale Contractor"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines contractors and developers enjoy our comprehensive post construction cleaning service that prepares their properties for final inspection and occupancy. Reliable service for consistent project success.",
    faq: [
      {
        question: "Do you offer competitive rates for Pembroke Pines post construction cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pembroke Pines post construction cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your post construction cleaning service in Pembroke Pines?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality post construction cleaning services in Pembroke Pines."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Pembroke Pines project was thorough and affordable. Great value and our clients were extremely satisfied!",
      author: "Carlos M., Pembroke Pines Developer"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation contractors and homeowners depend on our professional post construction cleaning service to prepare their properties for final delivery. We provide reliable service that meets project deadlines.",
    faq: [
      {
        question: "Do you service both houses and condos for post construction cleaning in Plantation?",
        answer: "Yes, we provide comprehensive post construction cleaning services for all types of properties including houses, condos, and townhomes in Plantation."
      },
      {
        question: "How do you ensure quality in Plantation post construction cleaning?",
        answer: "Every Plantation post construction cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Plantation project was exceptional. Professional, thorough, and our clients were amazed by the transformation!",
      author: "Robert H., Plantation Contractor"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches contractors and developers trust our professional post construction cleaning service to prepare their projects for final delivery. We understand the unique challenges of the Southwest Ranches construction market.",
    faq: [
      {
        question: "How do you handle large-scale post construction cleaning in Southwest Ranches?",
        answer: "We're experienced with large-scale projects and can deploy multiple teams to handle extensive post construction cleaning efficiently and on schedule."
      },
      {
        question: "What if I need to reschedule my Southwest Ranches post construction cleaning?",
        answer: "We're flexible with rescheduling and work closely with Southwest Ranches contractors to accommodate project changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent post construction cleaning for our Southwest Ranches developments. Consistent quality and our projects are always ready on time!",
      author: "David K., Southwest Ranches Developer"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach contractors and developers depend on our professional post construction cleaning service to prepare their luxury properties for final delivery. We understand the high standards expected in this prestigious area.",
    faq: [
      {
        question: "Do you handle luxury properties for post construction cleaning in Sunny Isles Beach?",
        answer: "Yes, we specialize in luxury post construction cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Sunny Isles Beach."
      },
      {
        question: "Can you accommodate Sunny Isles Beach HOA requirements for post construction cleaning?",
        answer: "Absolutely! We're familiar with Sunny Isles Beach HOA guidelines and ensure full compliance for post construction cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional post construction cleaning for our Sunny Isles Beach luxury property. Perfect service for our high-end development!",
      author: "James L., Sunny Isles Beach Developer"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise contractors and homeowners rely on our professional post construction cleaning service to prepare their properties for occupancy. We provide reliable service that helps meet project deadlines and client expectations.",
    faq: [
      {
        question: "Do you work around Sunrise construction schedules?",
        answer: "Yes, we can schedule post construction cleaning around construction timelines and work commitments while maintaining professional service standards."
      },
      {
        question: "What's your cancellation policy for Sunrise post construction cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Sunrise construction projects. Their reliable service helps us meet deadlines and exceed client expectations!",
      author: "Maria S., Sunrise Contractor"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac contractors and developers enjoy our comprehensive post construction cleaning service that prepares their properties for final inspection and occupancy. Reliable service for consistent project success.",
    faq: [
      {
        question: "Do you offer competitive rates for Tamarac post construction cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Tamarac post construction cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your post construction cleaning service in Tamarac?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality post construction cleaning services in Tamarac."
      }
    ],
    testimonial: {
      text: "The post construction cleaning service for our Tamarac project was thorough and affordable. Great value and our clients were extremely satisfied!",
      author: "Carlos M., Tamarac Developer"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston contractors and developers trust our professional post construction cleaning service to prepare their projects for final delivery. We understand the importance of meeting deadlines in the competitive Weston construction market.",
    faq: [
      {
        question: "Do you work with commercial developers in Weston?",
        answer: "Yes, we work directly with commercial developers, contractors, and construction companies throughout Weston and Broward County."
      },
      {
        question: "What is the average price for post construction cleaning in Weston?",
        answer: "Post construction cleaning costs vary based on project size, square footage, and specific requirements. Contact us for a detailed quote tailored to your Weston project."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Weston construction business with their reliable cleaning service. Our clients consistently praise the cleanliness!",
      author: "Jennifer L., Weston Developer"
    }
  }
];

const PostConstructionCleaningSouthFloridaPage = () => {
  const [openItem, setOpenItem] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash && cities.some(c => c.id === hash)) {
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
      if (hash && cities.some(c => c.id === hash)) {
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
        <title>Post Construction Cleaning South Florida | Red Rock</title>
        <meta name="description" content="Professional post construction cleaning service in South Florida. Red Rock Cleans handles construction cleanup for new builds and renovations in Fort Lauderdale, Weston, and beyond. Get a quote!" />
      </Helmet>
      <Hreflang />
      
      <div className="min-h-screen flex flex-col">
        <SouthFloridaNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-south-florida/sign-in" bookingUrl="/book-now-south-florida" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional post construction cleaning service in a South Florida property with beautiful landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('southFlorida.post.h1')}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your messy construction site into a pristine, move-in ready home or business. Our expert post construction cleaning service helps South Florida contractors, developers, and homeowners deliver flawless final products that exceed client expectations in the competitive local market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.post.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.post.quote')}
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.post.processTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Debris Removal & Initial Cleanup
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Removal of debris and construction materials
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Fine dust and drywall dust removal
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean up sawdust and construction dust
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Remove protective coverings and tape
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean all tools and equipment marks
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Fine Detailing & Final Polish
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Window and track cleaning
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Polishing fixtures and hardware
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all surfaces and fixtures
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

          {/* From Worksite to Flawless Finish */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.post.benefitsTitle')}</h2>
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
                    <h3 className="text-xl font-semibold mb-3">Saving Contractors Time</h3>
                    <p className="text-muted-foreground">
                      Let us handle the detailed cleanup while you focus on other project priorities. Our efficient process helps contractors meet deadlines and stay on schedule for final walkthroughs.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Perfect Final Product</h3>
                    <p className="text-muted-foreground">
                      Deliver a pristine, showcase-ready property that exceeds client expectations and reflects the quality of your construction work in the competitive South Florida market.
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.post.areasTitle')}</h2>
                <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
                  {cities.map((city) => (
                    <AccordionItem 
                      key={city.id} 
                      value={city.id} 
                      id={city.id}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div>
                          <h3 className="text-lg font-semibold">{city.name}</h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            Professional post construction cleaning services
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {city.description}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold">Local FAQ</h4>
                            {city.faq.map((item, index) => (
                              <div key={index} className="border-l-2 border-primary/20 pl-4">
                                <h5 className="font-medium text-sm">{item.question}</h5>
                                <p className="text-sm text-muted-foreground mt-1">{item.answer}</p>
                              </div>
                            ))}
                          </div>

                          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
                            "{city.testimonial.text}"
                            <footer className="mt-2 text-sm font-medium not-italic">
                              — {city.testimonial.author}
                            </footer>
                          </blockquote>

                          <Button asChild className="w-full">
                            <Link to="/book-now-south-florida">
                              Schedule Your {city.name} Post Construction Cleaning
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('southFlorida.post.otherServicesTitle')}</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond post construction cleaning, we offer specialized services to meet all your South Florida property needs.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link to="/south-florida/standard-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Standard Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Regular maintenance cleaning for consistent home cleanliness.
                      </p>
                    </div>
                  </Link>
                  <Link to="/south-florida/deep-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Deep Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive cleaning for special occasions or seasonal deep cleans.
                      </p>
                    </div>
                  </Link>
                  <Link to="/south-florida/move-out-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Move Out Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough end-of-tenancy cleaning to secure your security deposit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/south-florida/airbnb-cleaning-services/" className="group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('southFlorida.post.faqTitle')}</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What's the difference between a rough clean and a final clean?</h3>
                    <p className="text-muted-foreground">
                      A rough clean removes large debris and construction materials, while a final clean involves detailed dust removal, polishing, and fine detailing to make the property move-in ready and inspection-ready.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average price for post construction cleaning in Fort Lauderdale?</h3>
                    <p className="text-muted-foreground">
                      Post construction cleaning costs vary based on project size, square footage, and specific requirements. Contact us for a detailed quote tailored to your Fort Lauderdale project.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you work with commercial developers in Broward County?</h3>
                    <p className="text-muted-foreground">
                      Yes, we work directly with commercial developers, contractors, and construction companies throughout Broward County. We can coordinate with your project timeline and provide detailed cleaning services that meet your specifications.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I schedule post construction cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend scheduling post construction cleaning at least 3-5 days in advance to ensure availability. For large projects, we recommend 1-2 weeks advance notice to coordinate our team and resources.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('southFlorida.post.finalCtaTitle')}</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of successful South Florida contractors, developers, and homeowners who trust Red Rock Cleans for professional post construction cleaning that delivers flawless results and exceeds client expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('southFlorida.post.schedule')}
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      {t('southFlorida.post.quote')}
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

export default PostConstructionCleaningSouthFloridaPage;

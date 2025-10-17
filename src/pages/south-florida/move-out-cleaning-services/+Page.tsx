import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Shield, Star, Users, Calendar, Home, Sparkles, DollarSign, Key, RefreshCw, Heart, Clock4, Zap, HardHat, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura renters and homeowners trust our professional move out cleaning service to secure their security deposits and prepare their luxury properties for final inspection. Our thorough cleaning meets the high standards expected in this prestigious area.",
    faq: [
      {
        question: "Do you offer move out cleaning for luxury properties in Aventura?",
        answer: "Yes, we specialize in luxury move out cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Aventura."
      },
      {
        question: "How far in advance should I schedule Aventura move out cleaning?",
        answer: "We recommend scheduling Aventura move out cleaning at least 3-5 days in advance to ensure availability and proper coordination with your move-out timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans helped us secure our full security deposit with their thorough Aventura move out cleaning. Professional and reliable!",
      author: "Sarah M., Aventura Renter"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City families rely on our comprehensive move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our detailed cleaning process ensures you get your full deposit back.",
    faq: [
      {
        question: "What's included in Cooper City move out cleaning?",
        answer: "Our Cooper City move out cleaning includes inside oven, inside refrigerator, cleaning windows, inside all cabinets and drawers, baseboards, and all areas required for security deposit return."
      },
      {
        question: "Do you work around Cooper City move-out schedules?",
        answer: "Yes, we can schedule move out cleaning around your move-out timeline and work commitments while maintaining professional cleaning standards."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Cooper City home was exceptional. We got our full security deposit back thanks to their thorough work!",
      author: "Michael R., Cooper City Family"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach renters and homeowners depend on our professional move out cleaning service to secure their security deposits and prepare their properties for final inspection. Our thorough cleaning process addresses all landlord requirements.",
    faq: [
      {
        question: "Do you handle both houses and condos for move out cleaning in Dania Beach?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including houses, condos, and townhomes in Dania Beach."
      },
      {
        question: "How do you ensure quality in Dania Beach move out cleaning?",
        answer: "Every Dania Beach move out cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Dania Beach move out cleaning. Professional, thorough, and our landlord was impressed!",
      author: "Robert H., Dania Beach Homeowner"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie families trust our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our comprehensive cleaning process ensures you get your full deposit back.",
    faq: [
      {
        question: "Can you work around my Davie family's move-out schedule?",
        answer: "Absolutely! We offer flexible scheduling for Davie families, including weekends and evenings. We'll find a time that works perfectly with your move-out timeline."
      },
      {
        question: "Do you use eco-friendly products for move out cleaning in Davie?",
        answer: "Yes, we use eco-friendly, non-toxic move out cleaning products that are safe for your family while effectively removing all traces of occupancy."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Davie home was wonderful. Professional, reliable, and we got our full security deposit back!",
      author: "Lisa W., Davie Family"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale renters and homeowners trust our professional move out cleaning service to secure their security deposits and prepare their properties for final inspection. Our comprehensive process ensures you get your full deposit back.",
    faq: [
      {
        question: "What is the average cost for move out cleaning in Fort Lauderdale?",
        answer: "Move out cleaning costs vary based on property size, specific requirements, and scope of work. Contact us for a personalized quote tailored to your Fort Lauderdale property."
      },
      {
        question: "How is move out cleaning different from regular cleaning?",
        answer: "Move out cleaning includes intensive tasks like inside oven, inside refrigerator, cleaning all cabinets and drawers, baseboards, and detailed cleaning to meet landlord requirements for security deposit return."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Fort Lauderdale properties for years. Their move out cleaning service is thorough and we always get our full deposit back!",
      author: "Jennifer L., Fort Lauderdale Property Manager"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach families enjoy our comprehensive move out cleaning service that secures security deposits and prepares properties for final inspection. Perfect for families who want to ensure they get their full deposit back.",
    faq: [
      {
        question: "Do you work with families in Hallandale Beach for move out cleaning?",
        answer: "Yes, we're experienced with family homes and can work around your family's move-out schedule while maintaining professional cleaning standards for your Hallandale Beach property."
      },
      {
        question: "Can you customize move out cleaning for Hallandale Beach properties?",
        answer: "Absolutely! We can adapt our move out cleaning checklist based on your Hallandale Beach property's unique features and your landlord's specific requirements."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Hallandale Beach home has been excellent. Professional, family-friendly, and our landlord was very satisfied!",
      author: "Amanda T., Hallandale Beach Family"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood renters and homeowners rely on our professional move out cleaning service to secure their security deposits and prepare their properties for final inspection. Our reliable service ensures you get your full deposit back.",
    faq: [
      {
        question: "How flexible is your Hollywood move out cleaning schedule?",
        answer: "We offer very flexible scheduling for Hollywood residents, including weekends and evenings. We'll work with your move-out timeline and work commitments."
      },
      {
        question: "Do you offer same-day move out cleaning in Hollywood?",
        answer: "We can often accommodate urgent move out cleaning requests for Hollywood properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent move out cleaning for our Hollywood properties. Flexible scheduling and thorough results - perfect for our busy lifestyle!",
      author: "David K., Hollywood Property Owner"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas renters and homeowners trust our professional move out cleaning service to secure their security deposits and prepare their luxury downtown properties for final inspection. Our high-end cleaning standards match the prestige of this area.",
    faq: [
      {
        question: "Do you handle luxury properties for move out cleaning in Las Olas?",
        answer: "Yes, we specialize in luxury move out cleaning and are experienced with high-end finishes, premium materials, and luxury property standards in Las Olas."
      },
      {
        question: "Can you accommodate Las Olas HOA requirements for move out cleaning?",
        answer: "Absolutely! We're familiar with Las Olas HOA guidelines and ensure full compliance for move out cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional move out cleaning for our Las Olas luxury property. Perfect service for our high-end downtown lifestyle!",
      author: "James L., Las Olas Property Owner"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes families depend on our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our reliable service ensures you get your full deposit back.",
    faq: [
      {
        question: "Do you work around Lauderdale Lakes move-out schedules?",
        answer: "Yes, we can schedule move out cleaning around your move-out timeline and work commitments while maintaining professional service standards for Lauderdale Lakes residents."
      },
      {
        question: "What's your cancellation policy for Lauderdale Lakes move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Lauderdale Lakes move out cleaning. Their reliable service helps us get our full security deposit back!",
      author: "Maria S., Lauderdale Lakes Family"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill families enjoy our comprehensive move out cleaning service that secures security deposits and prepares properties for final inspection. Perfect for families who want to ensure they get their full deposit back.",
    faq: [
      {
        question: "Do you offer competitive rates for Lauderhill move out cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Lauderhill move out cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your Lauderhill move out cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality move out cleaning services in Lauderhill with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Lauderhill home has been thorough and affordable. Great value and we got our full security deposit back!",
      author: "Carlos M., Lauderhill Family"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate families rely on our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our comprehensive cleaning process ensures you get your full deposit back.",
    faq: [
      {
        question: "Do you service both houses and condos in Margate for move out cleaning?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including houses, condos, and townhomes in Margate."
      },
      {
        question: "How do you ensure quality in Margate move out cleaning?",
        answer: "Every Margate move out cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Margate home has been exceptional. Professional, thorough, and our landlord was very satisfied!",
      author: "Robert H., Margate Family"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar families trust our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our comprehensive process ensures you get your full deposit back.",
    faq: [
      {
        question: "What makes Miramar move out cleaning different?",
        answer: "Miramar move out cleaning addresses the unique needs of suburban families, including family-oriented cleaning approaches and diverse property types throughout the area."
      },
      {
        question: "Do you offer same-day move out cleaning in Miramar?",
        answer: "Yes, we can often accommodate urgent move out cleaning requests for Miramar properties, subject to availability and your specific cleaning needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our go-to move out cleaning service for our Miramar home. Reliable, professional, and we always get our full deposit back!",
      author: "Lisa W., Miramar Family"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale families depend on our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our reliable service ensures you get your full deposit back.",
    faq: [
      {
        question: "Do you work around North Lauderdale move-out schedules?",
        answer: "Yes, we can schedule move out cleaning around your move-out timeline and work commitments while maintaining professional service standards for North Lauderdale residents."
      },
      {
        question: "What's your cancellation policy for North Lauderdale move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our North Lauderdale move out cleaning. Their reliable service helps us get our full security deposit back!",
      author: "Maria S., North Lauderdale Family"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines families enjoy our comprehensive move out cleaning service that secures security deposits and prepares properties for final inspection. Perfect for families who want to ensure they get their full deposit back.",
    faq: [
      {
        question: "Do you offer competitive rates for Pembroke Pines move out cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Pembroke Pines move out cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your Pembroke Pines move out cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality move out cleaning services in Pembroke Pines with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Pembroke Pines home has been thorough and affordable. Great value and we got our full security deposit back!",
      author: "Carlos M., Pembroke Pines Family"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation families rely on our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our comprehensive cleaning process ensures you get your full deposit back.",
    faq: [
      {
        question: "Do you service both houses and condos in Plantation for move out cleaning?",
        answer: "Yes, we provide comprehensive move out cleaning services for all types of properties including houses, condos, and townhomes in Plantation."
      },
      {
        question: "How do you ensure quality in Plantation move out cleaning?",
        answer: "Every Plantation move out cleaning follows our detailed checklist and includes a comprehensive quality assurance process to guarantee satisfactory results."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Plantation home has been exceptional. Professional, thorough, and our landlord was very satisfied!",
      author: "Robert H., Plantation Family"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches families trust our professional move out cleaning service to secure their security deposits and prepare their spacious homes for final inspection. Our comprehensive process ensures you get your full deposit back.",
    faq: [
      {
        question: "How do you handle large homes in Southwest Ranches for move out cleaning?",
        answer: "We're experienced with large homes and can deploy multiple cleaners to handle extensive move out cleaning efficiently while maintaining our high quality standards."
      },
      {
        question: "What if I need to reschedule my Southwest Ranches move out cleaning?",
        answer: "We're flexible with rescheduling and work closely with Southwest Ranches families to accommodate schedule changes while maintaining quality standards."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides excellent move out cleaning for our Southwest Ranches home. Consistent quality and we got our full security deposit back!",
      author: "David K., Southwest Ranches Family"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach renters and homeowners trust our professional move out cleaning service to secure their security deposits and prepare their luxury beachfront properties for final inspection. Our high-end cleaning standards match the prestige of this area.",
    faq: [
      {
        question: "Do you handle luxury beachfront properties for move out cleaning in Sunny Isles Beach?",
        answer: "Yes, we specialize in luxury move out cleaning and are experienced with high-end finishes, premium materials, and beachfront property standards in Sunny Isles Beach."
      },
      {
        question: "Can you accommodate Sunny Isles Beach HOA requirements for move out cleaning?",
        answer: "Absolutely! We're familiar with Sunny Isles Beach HOA guidelines and ensure full compliance for move out cleaning services."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans provides exceptional move out cleaning for our Sunny Isles Beach luxury property. Perfect service for our beachfront lifestyle!",
      author: "James L., Sunny Isles Beach Property Owner"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise families depend on our professional move out cleaning service to secure their security deposits and prepare their homes for final inspection. Our reliable service ensures you get your full deposit back.",
    faq: [
      {
        question: "Do you work around Sunrise move-out schedules?",
        answer: "Yes, we can schedule move out cleaning around your move-out timeline and work commitments while maintaining professional service standards for Sunrise residents."
      },
      {
        question: "What's your cancellation policy for Sunrise move out cleaning?",
        answer: "We require 24-hour notice for cancellations, but we're flexible for emergencies and always work to find alternative solutions that meet your timeline."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been amazing for our Sunrise move out cleaning. Their reliable service helps us get our full security deposit back!",
      author: "Maria S., Sunrise Family"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac families enjoy our comprehensive move out cleaning service that secures security deposits and prepares properties for final inspection. Perfect for families who want to ensure they get their full deposit back.",
    faq: [
      {
        question: "Do you offer competitive rates for Tamarac move out cleaning?",
        answer: "Yes, we provide affordable, competitive rates for Tamarac move out cleaning while maintaining the highest service quality and thoroughness."
      },
      {
        question: "How reliable is your Tamarac move out cleaning service?",
        answer: "We're committed to reliability and have a strong track record of consistent, high-quality move out cleaning services in Tamarac with professional, trustworthy cleaners."
      }
    ],
    testimonial: {
      text: "The move out cleaning service for our Tamarac home has been thorough and affordable. Great value and we got our full security deposit back!",
      author: "Carlos M., Tamarac Family"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston families trust our professional move out cleaning service to secure their security deposits and prepare their beautiful homes for final inspection. Our comprehensive process ensures you get your full deposit back.",
    faq: [
      {
        question: "Do you work with families in Weston for move out cleaning?",
        answer: "Yes, we're experienced with family homes and can work around your family's move-out schedule while maintaining professional cleaning standards for your Weston property."
      },
      {
        question: "Can you customize move out cleaning for Weston properties?",
        answer: "Absolutely! We can adapt our move out cleaning checklist based on your Weston property's unique features and your landlord's specific requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Weston properties for over a year. Their move out cleaning service is thorough and we always get our full deposit back!",
      author: "Jennifer L., Weston Property Manager"
    }
  }
];

const MoveOutCleaningSouthFloridaPage = () => {
  const [openItem, setOpenItem] = useState<string>("");

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
        <title>Move Out Cleaning Service South Florida | Red Rock Cleans</title>
        <meta name="description" content="Secure your deposit with our reliable move out cleaning service in South Florida. Red Rock Cleans provides thorough end-of-tenancy cleaning for renters and sellers in Fort Lauderdale, Weston, and beyond. Book today!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <SouthFloridaNavigation loginUrl="https://customer-portal.maidily.com/red-rock-cleans-south-florida/sign-in" bookingUrl="/book-now-south-florida" />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="Professional move out cleaning service in a South Florida property with beautiful landscape views"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Stress-Free Move Out Cleaning Service in South Florida
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Secure your deposit with our reliable move out cleaning service in South Florida. Our comprehensive end-of-tenancy cleaning helps renters and homeowners in the fast-paced South Florida market secure their security deposit or prepare a property for sale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Move Out Cleaning
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
                      <Home className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Our Deposit-Focused Move Out Cleaning Checklist */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our Deposit-Focused Move Out Cleaning Checklist
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Kitchen & Appliances
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside oven and all oven racks
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside refrigerator and freezer
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Inside all cabinets and drawers
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean and sanitize all surfaces
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside dishwasher and microwave
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-3" />
                      Bathrooms & Details
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean inside all bathroom cabinets
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean baseboards throughout
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean windows and remove salt residue
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Sanitize all fixtures and hardware
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        Clean light fixtures and ceiling fans
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Make Your Move Easier and Secure Your Deposit */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Make Your Move Easier and Secure Your Deposit
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock4 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Save Time During a Stressful Move</h3>
                    <p className="text-muted-foreground">
                      Let us handle the detailed cleaning while you focus on packing, moving, and settling into your new home. Our efficient process helps you stay on schedule.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Satisfy Landlord Requirements</h3>
                    <p className="text-muted-foreground">
                      Our comprehensive cleaning checklist meets all landlord and property manager requirements for security deposit return in South Florida.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Maximize Deposit Return</h3>
                    <p className="text-muted-foreground">
                      Our thorough cleaning process maximizes your chances of getting your full security deposit back, saving you hundreds or thousands of dollars.
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
                  Areas We Serve in South Florida
                </h2>
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
                            Professional move out cleaning services
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
                              Schedule Your {city.name} Move Out Cleaning
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
                  Other Cleaning Services for Your Property in South Florida
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Beyond move out cleaning, we offer specialized services to meet all your South Florida property needs.
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
                  <Link to="/south-florida/post-construction-cleaning-services/" className="group">
                    <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Post Construction Cleaning Services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Professional cleanup for new builds and renovation projects.
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
                    <h3 className="text-lg font-semibold mb-3">Should the property be completely empty before a move out clean?</h3>
                    <p className="text-muted-foreground">
                      For the best results, we recommend having the property as empty as possible. However, we can work around remaining items and will move furniture as needed to clean thoroughly.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">What is the average cost for a move out clean in Fort Lauderdale?</h3>
                    <p className="text-muted-foreground">
                      Move out cleaning costs vary based on property size, specific requirements, and scope of work. Contact us for a personalized quote tailored to your Fort Lauderdale property.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Do you offer cleaning for military housing check-outs?</h3>
                    <p className="text-muted-foreground">
                      Yes, we provide specialized move out cleaning services for military families in South Florida, understanding the unique requirements and time constraints of military moves.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">How far in advance should I schedule move out cleaning?</h3>
                    <p className="text-muted-foreground">
                      We recommend scheduling move out cleaning at least 3-5 days in advance to ensure availability and proper coordination with your move-out timeline and final inspection.
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
                  Ready to Secure Your Security Deposit?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join hundreds of satisfied South Florida renters and homeowners who trust Red Rock Cleans for reliable move out cleaning services that maximize their security deposit return.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="h-14 text-lg px-8" asChild>
                    <Link to="/book-now-south-florida">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Your Move Out Cleaning Today
                    </Link>
                  </Button>
                  <Button size="lg" variant="cta" className="h-14 text-lg px-8" asChild>
                    <Link to="/south-florida-calculator">
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

export default MoveOutCleaningSouthFloridaPage;

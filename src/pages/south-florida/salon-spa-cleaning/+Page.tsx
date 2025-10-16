import { SouthFloridaNavigation } from "@/components/SouthFloridaNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Droplets, Heart, Scissors, Paintbrush, Sofa, ShowerHead, Smile, BadgeCheck, Wind, MapPin, Calendar, Stethoscope, Dumbbell, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const cities = [
  {
    id: "aventura",
    name: "Aventura",
    description: "Aventura's upscale salons and spas rely on our professional cleaning services to maintain luxurious, hygienic environments that discerning clients expect.",
    faq: [
      {
        question: "Do you offer scheduled salon cleaning in Aventura?",
        answer: "Yes, we provide daily, weekly, or custom cleaning schedules tailored to your Aventura salon or spa's operational hours and client traffic."
      },
      {
        question: "Can you clean after business hours in Aventura?",
        answer: "Absolutely. We work around your schedule, providing cleaning services after closing, during off-hours, or early morning before opening."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Aventura spa. Our clients constantly compliment the immaculate environment and relaxing atmosphere.",
      author: "Spa Director, Aventura Luxury Wellness"
    }
  },
  {
    id: "cooper-city",
    name: "Cooper City",
    description: "Cooper City beauty establishments trust our hygienic cleaning services to keep salons spotless, equipment sanitized, and clients feeling pampered.",
    faq: [
      {
        question: "What's included in Cooper City salon cleaning?",
        answer: "Our service includes treatment room sanitization, styling station cleaning, floor care, reception area maintenance, and restroom deep cleaning."
      },
      {
        question: "Do you sanitize nail stations in Cooper City?",
        answer: "Yes, we provide thorough cleaning and disinfection of nail stations, pedicure chairs, and foot baths following Florida Board of Cosmetology standards."
      }
    ],
    testimonial: {
      text: "Our Cooper City salon has never looked better. Red Rock Cleans understands the unique hygiene needs of beauty businesses.",
      author: "Salon Owner, Cooper City Hair Studio"
    }
  },
  {
    id: "dania-beach",
    name: "Dania Beach",
    description: "Dania Beach spas benefit from our comprehensive cleaning protocols that create tranquil, pristine environments where clients can truly relax.",
    faq: [
      {
        question: "How do you ensure hygiene in Dania Beach spas?",
        answer: "We follow strict sanitation protocols, use hospital-grade disinfectants, and adhere to Florida Board of Cosmetology regulations for all beauty services."
      },
      {
        question: "Can you clean specialized spa equipment in Dania Beach?",
        answer: "Yes, we're experienced with various spa equipment including massage tables, facial steamers, and hydrotherapy tubs, following manufacturer specifications."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has elevated our Dania Beach spa's cleanliness to five-star standards. Clients notice the difference immediately.",
      author: "Spa Manager, Dania Beach Wellness Center"
    }
  },
  {
    id: "davie",
    name: "Davie",
    description: "Davie's beauty and wellness facilities depend on our thorough cleaning to maintain client trust and create memorable relaxation experiences.",
    faq: [
      {
        question: "What's the cost of salon cleaning in Davie?",
        answer: "Costs vary based on facility size and services. Most Davie salons invest $200-$800 per cleaning. We provide free customized quotes."
      },
      {
        question: "Do you provide emergency cleaning in Davie?",
        answer: "Yes, we offer emergency response services for unexpected situations or urgent cleaning needs at your Davie salon or spa."
      }
    ],
    testimonial: {
      text: "Our Davie salon stays pristine thanks to Red Rock Cleans. Their attention to sanitation detail is exceptional.",
      author: "Owner, Davie Beauty Salon"
    }
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    description: "Fort Lauderdale salons and spas rely on our specialized cleaning to create luxurious, hygienic environments that exceed client expectations.",
    faq: [
      {
        question: "Do you follow Board of Cosmetology standards in Fort Lauderdale?",
        answer: "Absolutely. We're well-versed in Florida regulations and ensure all our cleaning procedures meet or exceed cosmetology board requirements."
      },
      {
        question: "How often should salons be cleaned in Fort Lauderdale?",
        answer: "Most Fort Lauderdale salons benefit from daily basic cleaning with weekly deep cleaning, though frequency depends on client volume."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans is our trusted partner for our Fort Lauderdale day spa. Professional, reliable, and hygiene-focused.",
      author: "VP of Operations, Fort Lauderdale Spa Group"
    }
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    description: "Hallandale Beach beauty establishments trust our meticulous cleaning services to maintain the pristine, luxurious standards clients demand.",
    faq: [
      {
        question: "Can you clean pedicure chairs in Hallandale Beach?",
        answer: "Yes, we specialize in deep cleaning and disinfecting pedicure chairs and foot baths using appropriate sanitizing products and techniques."
      },
      {
        question: "What areas do you clean in Hallandale Beach salons?",
        answer: "We clean styling stations, treatment rooms, nail areas, reception, waiting areas, restrooms, break rooms, and all common spaces."
      }
    ],
    testimonial: {
      text: "Our Hallandale Beach nail salon has seen increased client retention since partnering with Red Rock Cleans. Excellent hygiene service.",
      author: "Manager, Hallandale Beach Nails & Spa"
    }
  },
  {
    id: "hollywood",
    name: "Hollywood",
    description: "Hollywood's wellness sector benefits from our systematic cleaning that creates serene, hygienic environments essential for relaxation and rejuvenation.",
    faq: [
      {
        question: "Do you provide cleaning reports in Hollywood?",
        answer: "Yes, we provide detailed cleaning reports and documentation to help maintain compliance records for inspections and health department audits."
      },
      {
        question: "Can you handle large Hollywood spas?",
        answer: "Yes, we have the expertise and trained staff to service spas and salons of all sizes, from intimate boutiques to large wellness centers."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Hollywood spa to perfection. Their beauty industry cleaning expertise is unmatched.",
      author: "Spa Director, Hollywood Wellness & Beauty"
    }
  },
  {
    id: "las-olas",
    name: "Las Olas",
    description: "Las Olas salons and spas depend on our professional cleaning services to maintain the upscale, pristine environments their clientele expects.",
    faq: [
      {
        question: "What cleaning products do you use in Las Olas?",
        answer: "We use professional-grade, beauty-safe disinfectants and sanitizers that are effective yet gentle on salon equipment and surfaces."
      },
      {
        question: "Do you work around appointments in Las Olas?",
        answer: "Yes, we offer flexible scheduling including early morning, late evening, and weekend cleaning to avoid disrupting your client appointments."
      }
    ],
    testimonial: {
      text: "Our Las Olas salon has never looked better. Red Rock Cleans delivers consistent, quality results that our clients notice.",
      author: "Owner, Las Olas Hair & Beauty Studio"
    }
  },
  {
    id: "lauderdale-lakes",
    name: "Lauderdale Lakes",
    description: "Lauderdale Lakes beauty businesses rely on our comprehensive cleaning protocols to maintain hygienic, welcoming environments for every client.",
    faq: [
      {
        question: "How do you handle hair and product residue in Lauderdale Lakes?",
        answer: "We use specialized cleaning methods to remove hair clippings, product buildup, and styling residue from floors, stations, and equipment."
      },
      {
        question: "Can you clean steam rooms in Lauderdale Lakes?",
        answer: "Yes, we perform thorough cleaning and disinfection of steam rooms, saunas, and other spa amenities using appropriate methods and products."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Lauderdale Lakes salon compliant and our clients happy. We couldn't ask for better service.",
      author: "Manager, Lauderdale Lakes Beauty Salon"
    }
  },
  {
    id: "lauderhill",
    name: "Lauderhill",
    description: "Lauderhill's beauty industry trusts our salon and spa cleaning expertise to create hygienic, relaxing environments that clients love.",
    faq: [
      {
        question: "What makes your Lauderhill salon cleaning different?",
        answer: "We combine professional-grade cleaning with deep understanding of beauty industry hygiene requirements, cosmetology standards, and client expectations."
      },
      {
        question: "Do you clean barber shops in Lauderhill?",
        answer: "Yes, our service includes complete cleaning of barber shops, styling areas, shave stations, and all tools and equipment sanitization."
      }
    ],
    testimonial: {
      text: "Our Lauderhill spa runs more smoothly thanks to Red Rock Cleans' thorough cleaning program and attention to detail.",
      author: "Spa Manager, Lauderhill Day Spa"
    }
  },
  {
    id: "margate",
    name: "Margate",
    description: "Margate salons benefit from our specialized cleaning that prevents cross-contamination, maintains hygiene standards, and creates welcoming atmospheres.",
    faq: [
      {
        question: "How quickly can you start in Margate?",
        answer: "We can typically begin service within 1-3 business days of your initial consultation and facility assessment."
      },
      {
        question: "Do you offer maintenance plans in Margate?",
        answer: "Yes, we provide customized maintenance programs with scheduled cleaning at frequencies that match your salon or spa's operational needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been maintaining our Margate salon for years. Reliable, professional, and always immaculate.",
      author: "Owner, Margate Hair & Nail Studio"
    }
  },
  {
    id: "miramar",
    name: "Miramar",
    description: "Miramar's wellness facilities depend on our meticulous cleaning to maintain Florida Board of Cosmetology compliance and client satisfaction.",
    faq: [
      {
        question: "What cleaning methods do you use in Miramar salons?",
        answer: "We use professional disinfectants, HEPA filtration systems, and specialized beauty industry cleaning techniques for comprehensive salon hygiene."
      },
      {
        question: "Can you handle product residue in Miramar?",
        answer: "Yes, we specialize in removing hair color stains, styling product buildup, and other beauty-specific cleaning challenges."
      }
    ],
    testimonial: {
      text: "Our Miramar medispa's hygiene standards have improved dramatically since partnering with Red Rock Cleans. Exceptional service.",
      author: "Medical Director, Miramar MediSpa"
    }
  },
  {
    id: "north-lauderdale",
    name: "North Lauderdale",
    description: "North Lauderdale salons trust our systematic cleaning approach to maintain pristine, hygienic beauty environments that clients trust.",
    faq: [
      {
        question: "Do you clean during business hours in North Lauderdale?",
        answer: "We can work around active appointments, though we recommend after-hours cleaning for optimal results and minimal client disruption."
      },
      {
        question: "What's your response time for North Lauderdale emergencies?",
        answer: "We maintain rapid response capability and can typically deploy to North Lauderdale facilities within 2-4 hours for emergencies."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the demands of our North Lauderdale beauty salon. Always reliable and exceptionally clean.",
      author: "Manager, North Lauderdale Beauty Bar"
    }
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    description: "Pembroke Pines salons and spas rely on our professional cleaning services to maintain hygienic, relaxing facilities that support business success.",
    faq: [
      {
        question: "How do you ensure quality in Pembroke Pines?",
        answer: "We use detailed checklists, conduct regular inspections, and maintain open communication with your team to ensure consistent cleanliness."
      },
      {
        question: "Can you clean facial rooms in Pembroke Pines?",
        answer: "Yes, we clean facial treatment rooms, massage rooms, and all spa service areas following strict hygiene and sanitation protocols."
      }
    ],
    testimonial: {
      text: "Our Pembroke Pines spa has benefited tremendously from Red Rock Cleans' expertise. Client satisfaction scores are at an all-time high.",
      author: "Spa Owner, Pembroke Pines Wellness & Beauty"
    }
  },
  {
    id: "plantation",
    name: "Plantation",
    description: "Plantation's beauty facilities benefit from our thorough cleaning that creates luxurious, hygienic environments essential for client satisfaction.",
    faq: [
      {
        question: "What certifications do your Plantation cleaners have?",
        answer: "Our technicians are trained in beauty industry sanitation, Florida cosmetology regulations, proper disinfection techniques, and customer service standards."
      },
      {
        question: "Do you clean changing rooms in Plantation?",
        answer: "Yes, we offer comprehensive cleaning of changing rooms, shower facilities, and all private areas where clients prepare for treatments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans keeps our Plantation salon in top condition. Their beauty industry cleaning knowledge is impressive.",
      author: "Manager, Plantation Hair & Nail Boutique"
    }
  },
  {
    id: "southwest-ranches",
    name: "Southwest Ranches",
    description: "Southwest Ranches salons and spas trust our meticulous cleaning to maintain the pristine, luxurious standards that attract loyal clientele.",
    faq: [
      {
        question: "How long does salon cleaning take in Southwest Ranches?",
        answer: "Cleaning time varies by facility size and scope. Typical salons require 2-4 hours, while larger spas may need 4-8 hours depending on services."
      },
      {
        question: "Do you handle beauty product waste in Southwest Ranches?",
        answer: "Yes, we properly collect and dispose of beauty product containers, hair clippings, and salon waste following all regulations and best practices."
      }
    ],
    testimonial: {
      text: "Our Southwest Ranches day spa is more luxurious and hygienic thanks to Red Rock Cleans' comprehensive cleaning program.",
      author: "Owner, Southwest Ranches Spa Retreat"
    }
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    description: "Sunny Isles Beach spas rely on our specialized cleaning services to maintain the high-end, pristine environments that luxury clients demand.",
    faq: [
      {
        question: "How do you handle coastal conditions in Sunny Isles Beach?",
        answer: "We use appropriate cleaning methods to address humidity, salt air, and other coastal challenges that can affect salon and spa environments."
      },
      {
        question: "What's included in pedicure station cleaning in Sunny Isles Beach?",
        answer: "We provide deep cleaning and disinfection of pedicure chairs, foot baths, and surrounding areas using professional-grade sanitizers."
      }
    ],
    testimonial: {
      text: "The coastal environment requires extra attention. Red Rock Cleans keeps our Sunny Isles Beach spa immaculate and luxurious.",
      author: "Director, Sunny Isles Beach Oceanfront Spa"
    }
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Sunrise beauty businesses depend on our professional cleaning to ensure hygiene compliance, client satisfaction, and a stress-free environment.",
    faq: [
      {
        question: "Do you offer continuous cleaning in Sunrise?",
        answer: "Yes, we can provide ongoing cleaning support throughout the day for high-traffic salons and spas that require continuous maintenance."
      },
      {
        question: "How do you price salon cleaning in Sunrise?",
        answer: "We provide transparent, customized pricing based on facility size, cleaning frequency, and specific needs. Free quotes available."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been instrumental in maintaining our Sunrise salon's five-star reputation. Outstanding service and results.",
      author: "Manager, Sunrise Beauty & Wellness"
    }
  },
  {
    id: "tamarac",
    name: "Tamarac",
    description: "Tamarac salons and spas benefit from our comprehensive cleaning protocols that enhance hygiene, reduce liability, and create serene atmospheres.",
    faq: [
      {
        question: "What safety measures do you follow in Tamarac?",
        answer: "We follow proper sanitation protocols, use appropriate disinfectants, and coordinate with your team to maintain the highest hygiene standards."
      },
      {
        question: "Can you clean early morning in Tamarac?",
        answer: "Yes, we offer flexible scheduling including early morning, late evening, and weekend cleaning to work around your appointment schedule."
      }
    ],
    testimonial: {
      text: "Our Tamarac spa has never been more beautiful or hygienic. Red Rock Cleans delivers excellence every time.",
      author: "Owner, Tamarac Luxury Spa"
    }
  },
  {
    id: "weston",
    name: "Weston",
    description: "Weston's beauty sector trusts our salon and spa cleaning expertise to maintain pristine, hygienic environments that support business growth.",
    faq: [
      {
        question: "What makes your Weston service unique?",
        answer: "We combine professional beauty industry cleaning expertise with deep understanding of Florida cosmetology requirements and luxury spa standards."
      },
      {
        question: "Do you provide ongoing support in Weston?",
        answer: "Yes, we offer scheduled maintenance programs, emergency response services, and ongoing consultation for your Weston salon or spa facility."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been our Weston spa cleaning partner for years. Their expertise and reliability are essential to our five-star reputation.",
      author: "Spa Director, Weston Wellness & Beauty Center"
    }
  }
];

const SalonSpaCleaningSouthFloridaPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setOpenAccordion(hash);
    }
  }, []);

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value);
    window.location.hash = value;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Salon & Spa Cleaning South Florida | Red Rock Cleans</title>
        <meta name="description" content="Professional salon and spa cleaning in South Florida. Red Rock Cleans ensures a pristine, hygienic, and relaxing environment for hair salons, day spas, and medispas in Fort Lauderdale and Weston." />
        <meta name="keywords" content="salon and spa cleaning South Florida, salon cleaning near me, spa cleaning South Florida, hair salon cleaning Fort Lauderdale, nail salon cleaning Weston FL, medispa cleaning South Florida, best salon cleaners South Florida, hygienic spa cleaning Broward County, beauty salon sanitation, barber shop cleaning Fort Lauderdale, salon cleaning cost South Florida, spa cleaning prices Fort Lauderdale, what is salon cleaning South Florida, hire spa cleaners in South Florida" />
        <link rel="canonical" href="https://redrockcleans.com/south-florida/salon-spa-cleaning" />
      </Helmet>
      
      <SouthFloridaNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional salon and spa cleaning service in a South Florida wellness center"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Salon & Spa Cleaning for Ultimate Client Relaxation in South Florida
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In South Florida's competitive beauty and wellness industry, immaculate cleanliness is paramount for creating a luxurious, relaxing, and trustworthy experience for every client. Our specialized salon and spa cleaning services help you maintain the highest standards of hygiene and presentation that discerning clients expect, ensuring they return again and again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=south-florida">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Elevating Your Client's Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Elevating Your Client's Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Serene & Inviting Atmosphere</h3>
                      <p className="text-muted-foreground">
                        Immaculate cleanliness is the foundation of a truly luxurious salon or spa experience. Our meticulous cleaning creates a serene, high-end environment where clients can fully relax and unwind. From gleaming floors to spotless mirrors and dust-free surfaces, every detail contributes to the tranquil atmosphere that sets your South Florida establishment apart from the competition.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Strict Hygiene & Disinfection</h3>
                      <p className="text-muted-foreground">
                        We implement rigorous sanitation practices to prevent cross-contamination and meet Florida Board of Cosmetology standards. Our team uses professional-grade disinfectants on all high-touch surfaces, treatment tools, and equipment. We thoroughly sanitize pedicure chairs, nail stations, styling areas, and massage rooms to ensure every client enjoys a safe, hygienic experience at your South Florida salon or spa.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Flawless First Impressions</h3>
                      <p className="text-muted-foreground">
                        Your reception and waiting area is where client relationships begin. A spotless, welcoming entry sets the tone for a premium beauty experience. We ensure your lobby sparkles, floors shine, seating is pristine, and every surface radiates the professionalism and attention to detail that makes clients feel valued and eager to recommend your services to friends and family.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Salon & Spa Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Salon & Spa Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Scissors className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Treatment & Styling Rooms</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete sanitization of styling stations, treatment surfaces, and equipment. We meticulously clean mirrors, countertops, and floors while managing hair clippings and product residue. Our specialized techniques remove color stains and styling product buildup to keep your South Florida salon looking fresh and professional.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Paintbrush className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Nail Stations & Pedicure Chairs</h3>
                      <p className="text-muted-foreground text-sm">
                        Deep cleaning and disinfection of manicure tables, pedicure chairs, and foot bath systems. We follow Florida Board of Cosmetology guidelines for proper sanitization, ensuring all nail service areas are hygienically cleaned and safe for the next client. Our attention to detail prevents cross-contamination and maintains client trust.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Reception & Waiting Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Thorough cleaning of lobby spaces, waiting areas, and reception desks to create impeccable first impressions. We dust all surfaces, vacuum and mop floors, clean windows, sanitize seating, and ensure your entry area radiates the professionalism and luxury that attracts new clients to your South Florida salon or spa.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShowerHead className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Restrooms & Changing Areas</h3>
                      <p className="text-muted-foreground text-sm">
                        Intensive sanitization and restocking of client restrooms, changing rooms, and shower facilities to luxury standards. We ensure these private spaces are spotless, fresh-smelling, and well-stocked, providing the elevated experience clients expect when visiting your premium South Florida wellness establishment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Difference Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Difference a Professional Clean Makes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smile className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={95} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Client Satisfaction Boost</h3>
                  <p className="text-muted-foreground text-sm">
                    Salons and spas report higher client satisfaction scores with our cleaning
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold mb-2">Hygiene Standard Score</h3>
                  <p className="text-muted-foreground text-sm">
                    All our salon clients meet Florida Board of Cosmetology requirements
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={40} duration={2} />%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Stress-Free Environment</h3>
                  <p className="text-muted-foreground text-sm">
                    Reduction in client stress levels in professionally cleaned spa environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Areas We Serve in South Florida
              </h2>
              
              {/* City Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a South Florida Area</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {cities.map((city) => (
                  <AccordionItem key={city.id} value={city.id} id={city.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{city.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{city.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Salon & Spa Cleaning Services in {city.name}</h4>
                          <p className="text-muted-foreground">
                            {city.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {city.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{city.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {city.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=south-florida">
                            Get Salon & Spa Cleaning Quote for {city.name}
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

        {/* Other Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Other Commercial Cleaning Services in South Florida
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Professional cleaning services for retail stores and shopping centers
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/retail-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic cleaning services for medical offices and medispas
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/medical-office-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Specialized cleaning for fitness centers and wellness facilities
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/south-florida/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="what-is-salon-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is salon and spa cleaning in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Salon and spa cleaning in South Florida involves specialized services designed for beauty and wellness establishments. This includes sanitization of styling stations, treatment rooms, and beauty equipment, deep cleaning and disinfection of pedicure chairs and nail stations, thorough floor cleaning to remove hair and product residue, reception area and waiting room maintenance, restroom and changing area intensive cleaning, and compliance with Florida Board of Cosmetology hygiene standards. Our services create the pristine, relaxing environments that South Florida beauty clients expect.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How much does salon and spa cleaning cost in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Salon and spa cleaning costs vary based on facility size, services offered, and cleaning frequency. Most South Florida hair salons invest $200-$500 per cleaning session, nail salons typically range $250-$600, and full-service day spas may invest $500-$1,500+ depending on size and amenities. We recommend daily basic cleaning with weekly deep sanitization for optimal hygiene. Contact us for a free, customized quote based on your specific salon or spa requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hygiene-standards" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you meet Florida Board of Cosmetology hygiene standards?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, all our salon and spa cleaning services are designed to meet or exceed Florida Board of Cosmetology hygiene requirements. We use approved disinfectants and sanitizers, properly clean and sanitize all beauty equipment and tools, maintain detailed cleaning logs for compliance documentation, follow proper cross-contamination prevention protocols, and train our staff in beauty industry sanitation standards. Our goal is to help you maintain a hygienic, compliant beauty environment that clients trust.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="hire-cleaners" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do I hire spa cleaners in South Florida?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Hiring spa cleaners in South Florida is simple with Red Rock Cleans. Contact us for a free consultation and facility walkthrough. We'll evaluate your specific cleaning needs, service areas, equipment, and schedule requirements. Then we'll provide a detailed proposal with transparent pricing and a customized cleaning plan designed for beauty and wellness environments. Once approved, we can typically begin service within 1-3 business days. We offer flexible scheduling to work around your client appointments and business hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Salon or Spa's Cleanliness Standards?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join South Florida's premier salons and spas that trust Red Rock Cleans for professional beauty industry cleaning
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote">Get Your Free Salon & Spa Cleaning Quote</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A serene and immaculate spa treatment room in South Florida, cleaned by Red Rock Cleans"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalonSpaCleaningSouthFloridaPage;


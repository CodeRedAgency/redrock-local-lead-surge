import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Sparkles, 
  ShoppingCart, 
  Shirt, 
  Store, 
  AppWindow, 
  PictureInPicture, 
  Archive, 
  Users, 
  Star, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle,
  ShoppingBag,
  Building,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const neighborhoods = [
  {
    id: "aiea",
    name: "Aiea",
    description: "Aiea retail stores and boutiques trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence in the competitive retail market.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Aiea retail stores?",
        answer: "Yes, we offer specialized retail cleaning services including window cleaning, floor care, fitting room maintenance, and display case cleaning tailored to your specific retail environment and customer traffic patterns."
      },
      {
        question: "What if we're not satisfied with retail cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of retail operations and the importance of maintaining clean, inviting shopping environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea retail store spotless and customer-ready for over two years. Their attention to detail and window cleaning is outstanding!",
      author: "Store Manager, Aiea Boutique"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach retail establishments rely on our professional retail cleaning services for consistent facility maintenance that keeps their stores operating at optimal customer satisfaction and brand image standards year-round.",
    faq: [
      {
        question: "How often do Ewa Beach retail stores schedule cleaning?",
        answer: "Most Ewa Beach retail stores prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your customer traffic and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency retail cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach retail store to perfection. Their professionalism and understanding of retail cleaning requirements are outstanding.",
      author: "Owner, Ewa Beach Retail"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai retail stores and shopping centers trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence.",
    faq: [
      {
        question: "Do you service high-end boutiques in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning various retail types, including high-end boutiques, department stores, specialty shops, and shopping centers with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure merchandise safety during cleaning in Hawaii Kai?",
        answer: "We use only retail-safe cleaning products and follow careful protocols to ensure merchandise safety while maintaining the highest standards of cleanliness and customer appeal."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai retail store spotless and customer-ready for over two years. Highly recommend their professional retail cleaning service!",
      author: "Store Manager, Hawaii Kai Shopping Center"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu retail stores and shopping districts enjoy consistent, professional retail cleaning services that maintain their facilities clean and operating at optimal customer satisfaction and brand image standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu retail store schedules?",
        answer: "Yes, we can schedule cleanings around your business hours, customer traffic patterns, and operational requirements to minimize disruption to your retail operations and customer service."
      },
      {
        question: "What if we're not satisfied with retail cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of retail operations and customer satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu retail store to perfection. Their professionalism and understanding of retail cleaning requirements are outstanding.",
      author: "General Manager, Honolulu Retail District"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua retail stores and local shops trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence.",
    faq: [
      {
        question: "How often do Kailua retail stores schedule cleaning?",
        answer: "Most Kailua retail stores prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your customer traffic and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency retail cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua retail store spotless and customer-ready for over two years. Their attention to detail is outstanding!",
      author: "Store Owner, Kailua Local Shop"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei retail stores and shopping centers rely on our professional retail cleaning services for consistent facility maintenance that keeps their stores operating at optimal customer satisfaction and brand image standards.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Kapolei retail stores?",
        answer: "Yes, we offer specialized retail cleaning services including window cleaning, floor care, fitting room maintenance, and display case cleaning tailored to your specific retail environment."
      },
      {
        question: "What if we're not satisfied with retail cleaning in Kapolei?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of retail operations and customer satisfaction."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei retail store to perfection. Their professionalism and understanding of retail cleaning requirements are outstanding.",
      author: "Store Manager, Kapolei Shopping Center"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo retail establishments trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence.",
    faq: [
      {
        question: "How often do Makakilo retail stores schedule cleaning?",
        answer: "Most Makakilo retail stores prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your customer traffic and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Makakilo?",
        answer: "Yes, we offer emergency retail cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo retail store spotless and customer-ready for over two years. Highly recommend their professional service!",
      author: "Store Owner, Makakilo Retail"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani retail stores and shopping centers enjoy consistent, professional retail cleaning services that maintain their facilities clean and operating at optimal customer satisfaction and brand image standards year-round.",
    faq: [
      {
        question: "Do you work around Mililani retail store schedules?",
        answer: "Yes, we can schedule cleanings around your business hours, customer traffic patterns, and operational requirements to minimize disruption to your retail operations."
      },
      {
        question: "What if we're not satisfied with retail cleaning in Mililani?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of retail operations and customer satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani retail store to perfection. Their professionalism and understanding of retail cleaning requirements are outstanding.",
      author: "General Manager, Mililani Shopping Center"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City retail stores and local shops trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Pearl City retail stores?",
        answer: "Yes, we offer specialized retail cleaning services including window cleaning, floor care, fitting room maintenance, and display case cleaning tailored to your specific retail environment."
      },
      {
        question: "How do you ensure merchandise safety during cleaning in Pearl City?",
        answer: "We use only retail-safe cleaning products and follow careful protocols to ensure merchandise safety while maintaining the highest standards of cleanliness and customer appeal."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City retail store spotless and customer-ready for over two years. Their attention to detail is outstanding!",
      author: "Store Manager, Pearl City Local Shop"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae retail stores and boutiques rely on our professional retail cleaning services for consistent facility maintenance that keeps their stores operating at optimal customer satisfaction and brand image standards.",
    faq: [
      {
        question: "How often do Waialae retail stores schedule cleaning?",
        answer: "Most Waialae retail stores prefer daily or multiple times per week cleaning schedules, though we offer flexible scheduling based on your customer traffic and operational needs."
      },
      {
        question: "Do you provide emergency cleaning services in Waialae?",
        answer: "Yes, we offer emergency retail cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae retail store to perfection. Their professionalism and understanding of retail cleaning requirements are outstanding.",
      author: "Store Owner, Waialae Boutique"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki retail stores and luxury boutiques trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence in the competitive tourist market.",
    faq: [
      {
        question: "Do you service luxury boutiques in Waikiki?",
        answer: "Yes, we have extensive experience cleaning various retail types, including luxury boutiques, high-end department stores, specialty shops, and tourist-focused retail establishments with unique cleaning requirements and high standards."
      },
      {
        question: "How do you handle high tourist traffic cleaning in Waikiki?",
        answer: "We understand the unique challenges of tourist-heavy retail environments and provide flexible scheduling, rapid response times, and specialized cleaning protocols to maintain pristine conditions during peak tourist seasons."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki retail store spotless and tourist-ready for over two years. Highly recommend their professional retail cleaning service!",
      author: "Store Manager, Waikiki Luxury Boutique"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo retail stores and local shops enjoy consistent, professional retail cleaning services that maintain their facilities clean and operating at optimal customer satisfaction and brand image standards year-round.",
    faq: [
      {
        question: "Do you work around Waimanalo retail store schedules?",
        answer: "Yes, we can schedule cleanings around your business hours, customer traffic patterns, and operational requirements to minimize disruption to your retail operations and customer service."
      },
      {
        question: "What if we're not satisfied with retail cleaning in Waimanalo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of retail operations and customer satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo retail store to perfection. Their professionalism and understanding of retail cleaning requirements are outstanding.",
      author: "Store Owner, Waimanalo Local Shop"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu retail stores and shopping centers trust our professional retail cleaning services for comprehensive facility maintenance that ensures optimal customer satisfaction, brand image enhancement, and shopping experience excellence.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Waipahu retail stores?",
        answer: "Yes, we offer specialized retail cleaning services including window cleaning, floor care, fitting room maintenance, and display case cleaning tailored to your specific retail environment and customer traffic patterns."
      },
      {
        question: "How do you ensure merchandise safety during cleaning in Waipahu?",
        answer: "We use only retail-safe cleaning products and follow careful protocols to ensure merchandise safety while maintaining the highest standards of cleanliness and customer appeal."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu retail store spotless and customer-ready for over two years. Their attention to detail and window cleaning is outstanding!",
      author: "Store Manager, Waipahu Shopping Center"
    }
  }
];

export default function RetailCleaningOahuPage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && neighborhoods.some(n => n.id === hash)) {
      setActiveAccordion(hash);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Retail Store Cleaning Oahu | Red Rock Cleans</title>
        <meta name="description" content="Professional retail store cleaning on Oahu. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts and sales floors in Honolulu, Waikiki, and beyond." />
        <meta name="keywords" content="retail store cleaning Oahu, store cleaning near me, boutique cleaning Honolulu, shop cleaning Waikiki, Ala Moana cleaning services, best retail cleaners Oahu, commercial store cleaning Honolulu, storefront window cleaning Oahu, retail floor care Oahu, retail cleaning cost Oahu, store cleaning prices Honolulu, retail cleaning checklist Oahu, hire store cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/retail-cleaning/" />
      </Helmet>

      <OahuNavigation bookingUrl="/commercial-quote?location=oahu" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional retail store cleaning service in Honolulu, Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Retail Cleaning to Elevate Your Oahu Brand
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Oahu's vibrant retail market, a customer's perception of your brand begins with a spotless environment. 
                Our professional retail cleaning services ensure every shopping experience is positive, memorable, and reflects the quality your customers expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=oahu">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Retail Cleaning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creating an Unforgettable Shopping Experience */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Creating an Unforgettable Shopping Experience
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Immaculate First Impressions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Crystal-clear entryways and windows attract foot traffic from both kama'aina and visitors. 
                      Our meticulous attention to storefront presentation ensures your retail space makes the perfect first impression every day.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">A Healthy, Inviting Space</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive disinfection of high-touch areas like counters, door handles, and fitting rooms 
                      creates a safe shopping environment that customers trust and appreciate.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Protecting Your Merchandise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Meticulous dust and debris control keeps your products pristine and display-ready. 
                      Our careful cleaning methods ensure merchandise remains in perfect condition for customers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Retail Cleaning Checklist */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Comprehensive Retail Cleaning Checklist
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Store className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Sales Floor & Displays</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Floor polishing, carpet care, and dusting all fixtures to maintain a pristine shopping environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <AppWindow className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Fitting Rooms & Restrooms</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Maintaining the highest standards of hygiene in customer and staff areas.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <PictureInPicture className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Windows & Storefront</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Streak-free glass cleaning for maximum visibility and curb appeal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Archive className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">Back-of-House & Stockrooms</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Keeping employee areas clean and organized for efficient operations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Professionally Cleaned Store */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Impact of a Professionally Cleaned Store
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Positive Customer Impressions</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp end={95} duration={2} suffix="%" />
                </div>
                <p className="text-gray-600">of customers notice cleanliness as a key factor in their shopping experience</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Enhanced Brand Image</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  <CountUp end={78} duration={2} suffix="%" />
                </div>
                <p className="text-gray-600">improvement in customer perception of store quality and professionalism</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Hours Saved for Your Staff</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  <CountUp end={15} duration={2} suffix="+" />
                </div>
                <p className="text-gray-600">hours per week your team can focus on customer service instead of cleaning</p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve on Oahu */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Areas We Serve on Oahu
            </h2>
            <Accordion type="single" collapsible value={activeAccordion} onValueChange={setActiveAccordion} className="w-full">
              {neighborhoods.map((neighborhood) => (
                <AccordionItem key={neighborhood.id} value={neighborhood.id} className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-lg font-semibold">{neighborhood.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">{neighborhood.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Frequently Asked Questions</h4>
                          <div className="space-y-3">
                            {neighborhood.faq.map((faq, index) => (
                              <div key={index} className="border-l-4 border-blue-200 pl-4">
                                <p className="font-medium text-gray-800 text-sm">{faq.question}</p>
                                <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Customer Testimonial</h4>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-gray-700 italic mb-3">"{neighborhood.testimonial.text}"</p>
                            <p className="text-gray-600 text-sm font-medium">- {neighborhood.testimonial.author}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full sm:w-auto" asChild>
                          <Link to="/commercial-quote?location=oahu">
                            <Phone className="w-4 h-4 mr-2" />
                            Book Retail Cleaning in {neighborhood.name}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            </div>
          </div>
        </section>

        {/* Other Commercial Cleaning Services on Oahu */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Other Commercial Cleaning Services on Oahu
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Showroom Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">Professional showroom cleaning services for automotive and retail displays</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/oahu/showroom-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Restaurant Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">Health code compliant cleaning for restaurants and dining establishments</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/oahu/restaurant-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                  <p className="text-muted-foreground text-sm mb-4">Specialized fitness facility cleaning for health and wellness centers</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/oahu/gym-cleaning/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold">What cleaning services do you provide for retail stores?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We provide comprehensive retail cleaning services including floor cleaning and polishing, window and storefront cleaning, 
                    fitting room and restroom maintenance, display case cleaning, dusting of fixtures and merchandise areas, 
                    and back-of-house cleaning for stockrooms and employee areas.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold">How often should retail stores be professionally cleaned?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Most retail stores benefit from daily or multiple times per week cleaning, depending on customer traffic, 
                    store size, and merchandise type. High-traffic areas like Waikiki may require more frequent cleaning, 
                    while smaller local shops might schedule weekly or bi-weekly services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold">Do you work around retail store business hours?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, we offer flexible scheduling to work around your business hours. We can provide cleaning services 
                    before opening, after closing, or during low-traffic periods to minimize disruption to your operations 
                    and customer service.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="text-lg font-semibold">What if we're not satisfied with the retail cleaning service?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We guarantee satisfaction and will return to address any concerns at no additional charge. 
                    We understand the critical nature of retail operations and the importance of maintaining clean, 
                    inviting shopping environments for your customers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src="/src/assets/service-products.jpg" 
                alt="A bright, clean luxury retail store in Honolulu, cleaned by Red Rock Cleans"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Retail Store's Image?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Join the many Oahu retail stores that trust Red Rock Cleans for professional, reliable cleaning services 
                that enhance their brand image and customer experience.
              </p>
              <Button size="lg" className="h-14 text-lg px-8" asChild>
                <Link to="/commercial-quote?location=oahu">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Retail Cleaning Service
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

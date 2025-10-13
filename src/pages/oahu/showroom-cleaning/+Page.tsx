import { OahuNavigation } from "@/components/OahuNavigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Diamond, 
  Sparkles, 
  Handshake, 
  Droplets, 
  Square, 
  Car, 
  Sofa, 
  Users, 
  DollarSign, 
  Search, 
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
    description: "Aiea showrooms and dealerships trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and client satisfaction in the competitive automotive and retail market.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Aiea car dealerships?",
        answer: "Yes, we offer specialized showroom cleaning services including floor polishing, window cleaning, product dusting, and client area maintenance tailored to automotive dealerships and retail showrooms."
      },
      {
        question: "What if we're not satisfied with showroom cleaning in Aiea?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of product presentation and client experience in showroom environments."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Aiea showroom spotless and client-ready for over two years. Our customers consistently praise the cleanliness!",
      author: "Showroom Manager, Aiea Auto Center"
    }
  },
  {
    id: "ewa-beach",
    name: "Ewa Beach",
    description: "Ewa Beach showrooms and retail spaces rely on our professional showroom cleaning services for consistent facility maintenance that keeps their product displays operating at optimal presentation standards.",
    faq: [
      {
        question: "How often do Ewa Beach showrooms schedule cleaning?",
        answer: "Most Ewa Beach showrooms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your client traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Ewa Beach?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Ewa Beach showroom to perfection. Their attention to detail and product presentation is outstanding.",
      author: "Operations Director, Ewa Beach Furniture Gallery"
    }
  },
  {
    id: "hawaii-kai",
    name: "Hawaii Kai",
    description: "Hawaii Kai showrooms and luxury retail spaces trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and competitive advantage in the high-end market.",
    faq: [
      {
        question: "Do you service luxury showrooms in Hawaii Kai?",
        answer: "Yes, we have extensive experience cleaning various showroom types, including luxury automotive dealerships, high-end furniture stores, and premium retail spaces with unique cleaning requirements and high standards."
      },
      {
        question: "How do you ensure product safety during cleaning in Hawaii Kai?",
        answer: "We use only showroom-safe cleaning products and follow careful protocols to ensure product safety while maintaining the highest standards of cleanliness and presentation quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Hawaii Kai showroom spotless and client-ready for over two years. Highly recommend their professional service!",
      author: "Showroom Director, Hawaii Kai Luxury Motors"
    }
  },
  {
    id: "honolulu",
    name: "Honolulu",
    description: "Honolulu showrooms and dealerships enjoy consistent, professional showroom cleaning services that maintain their facilities clean and operating at optimal client satisfaction and product presentation standards year-round.",
    faq: [
      {
        question: "Do you work around Honolulu showroom schedules?",
        answer: "Yes, we can schedule cleanings around your business hours, client appointments, and operational requirements to minimize disruption to your showroom operations and client service."
      },
      {
        question: "What if we're not satisfied with showroom cleaning in Honolulu?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of product presentation and client satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Honolulu showroom to perfection. Their professionalism and understanding of showroom cleaning requirements are outstanding.",
      author: "General Manager, Honolulu Auto Plaza"
    }
  },
  {
    id: "kailua",
    name: "Kailua",
    description: "Kailua showrooms and retail spaces trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and competitive advantage in the local market.",
    faq: [
      {
        question: "How often do Kailua showrooms schedule cleaning?",
        answer: "Most Kailua showrooms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your client traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Kailua?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Kailua showroom spotless and client-ready for over two years. Their attention to detail is outstanding!",
      author: "Showroom Owner, Kailua Home Furnishings"
    }
  },
  {
    id: "kapolei",
    name: "Kapolei",
    description: "Kapolei showrooms and dealerships rely on our professional showroom cleaning services for consistent facility maintenance that keeps their product displays operating at optimal presentation standards.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Kapolei showrooms?",
        answer: "Yes, we offer specialized showroom cleaning services including floor polishing, window cleaning, product dusting, and client area maintenance tailored to your specific showroom environment."
      },
      {
        question: "What if we're not satisfied with showroom cleaning in Kapolei?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of product presentation and client satisfaction."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Kapolei showroom to perfection. Their professionalism and understanding of showroom cleaning requirements are outstanding.",
      author: "Showroom Manager, Kapolei Auto Center"
    }
  },
  {
    id: "makakilo",
    name: "Makakilo",
    description: "Makakilo showrooms and retail spaces trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and client experience excellence.",
    faq: [
      {
        question: "How often do Makakilo showrooms schedule cleaning?",
        answer: "Most Makakilo showrooms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your client traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Makakilo?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Makakilo showroom spotless and client-ready for over two years. Highly recommend their professional service!",
      author: "Showroom Administrator, Makakilo Retail Center"
    }
  },
  {
    id: "mililani",
    name: "Mililani",
    description: "Mililani showrooms and dealerships enjoy consistent, professional showroom cleaning services that maintain their facilities clean and operating at optimal client satisfaction and product presentation standards year-round.",
    faq: [
      {
        question: "Do you work around Mililani showroom schedules?",
        answer: "Yes, we can schedule cleanings around your business hours, client appointments, and operational requirements to minimize disruption to your showroom operations."
      },
      {
        question: "What if we're not satisfied with showroom cleaning in Mililani?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of product presentation and client satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Mililani showroom to perfection. Their professionalism and understanding of showroom cleaning requirements are outstanding.",
      author: "General Manager, Mililani Auto Mall"
    }
  },
  {
    id: "pearl-city",
    name: "Pearl City",
    description: "Pearl City showrooms and retail spaces trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and competitive advantage in the local market.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Pearl City showrooms?",
        answer: "Yes, we offer specialized showroom cleaning services including floor polishing, window cleaning, product dusting, and client area maintenance tailored to your specific showroom environment."
      },
      {
        question: "How do you ensure product safety during cleaning in Pearl City?",
        answer: "We use only showroom-safe cleaning products and follow careful protocols to ensure product safety while maintaining the highest standards of cleanliness and presentation quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Pearl City showroom spotless and client-ready for over two years. Their attention to detail is outstanding!",
      author: "Showroom Manager, Pearl City Furniture Gallery"
    }
  },
  {
    id: "waialae",
    name: "Waialae",
    description: "Waialae showrooms and luxury retail spaces rely on our professional showroom cleaning services for consistent facility maintenance that keeps their product displays operating at optimal presentation standards.",
    faq: [
      {
        question: "How often do Waialae showrooms schedule cleaning?",
        answer: "Most Waialae showrooms prefer daily or multiple-times-per-week cleaning schedules, though we offer flexible scheduling based on your client traffic and operational requirements."
      },
      {
        question: "Do you provide emergency cleaning services in Waialae?",
        answer: "Yes, we offer emergency cleaning services for unexpected situations, special events, and urgent facility maintenance needs with rapid response times."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waialae showroom to perfection. Their professionalism and understanding of showroom cleaning requirements are outstanding.",
      author: "Showroom Owner, Waialae Luxury Boutique"
    }
  },
  {
    id: "waikiki",
    name: "Waikiki",
    description: "Waikiki showrooms and luxury retail spaces trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and client experience excellence in the competitive tourist market.",
    faq: [
      {
        question: "Do you service luxury showrooms in Waikiki?",
        answer: "Yes, we have extensive experience cleaning various showroom types, including luxury automotive dealerships, high-end retail spaces, and premium tourist-focused establishments with unique cleaning requirements and high standards."
      },
      {
        question: "How do you handle high tourist traffic cleaning in Waikiki?",
        answer: "We understand the unique challenges of tourist-heavy showroom environments and provide flexible scheduling, rapid response times, and specialized cleaning protocols to maintain pristine conditions during peak tourist seasons."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waikiki showroom spotless and tourist-ready for over two years. Highly recommend their professional showroom cleaning service!",
      author: "Showroom Manager, Waikiki Luxury Motors"
    }
  },
  {
    id: "waimanalo",
    name: "Waimanalo",
    description: "Waimanalo showrooms and retail spaces enjoy consistent, professional showroom cleaning services that maintain their facilities clean and operating at optimal client satisfaction and product presentation standards year-round.",
    faq: [
      {
        question: "Do you work around Waimanalo showroom schedules?",
        answer: "Yes, we can schedule cleanings around your business hours, client appointments, and operational requirements to minimize disruption to your showroom operations and client service."
      },
      {
        question: "What if we're not satisfied with showroom cleaning in Waimanalo?",
        answer: "We guarantee satisfaction and will return to address any concerns at no additional charge, understanding the critical nature of product presentation and client satisfaction requirements."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans maintains our Waimanalo showroom to perfection. Their professionalism and understanding of showroom cleaning requirements are outstanding.",
      author: "Showroom Owner, Waimanalo Local Gallery"
    }
  },
  {
    id: "waipahu",
    name: "Waipahu",
    description: "Waipahu showrooms and dealerships trust our professional showroom cleaning services for comprehensive facility maintenance that ensures optimal product presentation and client experience excellence.",
    faq: [
      {
        question: "Do you provide specialized cleaning for Waipahu showrooms?",
        answer: "Yes, we offer specialized showroom cleaning services including floor polishing, window cleaning, product dusting, and client area maintenance tailored to your specific showroom environment and client traffic patterns."
      },
      {
        question: "How do you ensure product safety during cleaning in Waipahu?",
        answer: "We use only showroom-safe cleaning products and follow careful protocols to ensure product safety while maintaining the highest standards of cleanliness and presentation quality."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been keeping our Waipahu showroom spotless and client-ready for over two years. Their attention to detail and floor polishing is outstanding!",
      author: "Showroom Manager, Waipahu Auto Center"
    }
  }
];

export default function ShowroomCleaningOahuPage() {
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
        <title>Showroom Cleaning Services Oahu | Red Rock Cleans</title>
        <meta name="description" content="Professional showroom cleaning on Oahu. Red Rock Cleans enhances your product presentation with meticulous cleaning for car dealerships, furniture stores, and more in Honolulu and Waikiki." />
        <meta name="keywords" content="showroom cleaning services Oahu, showroom cleaning near me, car dealership cleaning Oahu, furniture showroom cleaning Honolulu, luxury retail cleaning Waikiki, best showroom cleaners Oahu, professional showroom cleaning Honolulu, showroom floor polishing Oahu, immaculate dealership cleaning Oahu, showroom cleaning cost Oahu, dealership cleaning prices Honolulu, what is showroom cleaning Oahu, hire showroom cleaners in Oahu" />
        <link rel="canonical" href="https://redrockcleans.com/oahu/showroom-cleaning/" />
      </Helmet>

      <OahuNavigation bookingUrl="/book-now-oahu" />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional showroom cleaning service in Honolulu, Oahu"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Impeccable Showroom Cleaning to Showcase Your Oahu Products
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                For high-value products on Oahu, the showroom's cleanliness is a direct reflection of the product's quality and is crucial for influencing purchasing decisions for both kama'aina and visitors. 
                Our professional showroom cleaning services ensure every display creates the perfect impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/book-now-oahu">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Showroom Cleaning
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

        {/* Creating a Flawless Buying Environment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating a Flawless Buying Environment
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Diamond className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Pristine Product Presentation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We ensure every product is free of dust, smudges, and fingerprints, creating a flawless presentation 
                        that enhances the perceived value and quality of your merchandise for potential buyers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">Gleaming Floors & Surfaces</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Perfectly polished floors and spotless surfaces reflect luxury and attention to detail. 
                        Our specialized floor care creates an impressive foundation that complements your premium products.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-4">A Premium Client Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Clean client lounges, offices, and reception areas create a welcoming atmosphere that builds trust and confidence. 
                        Our attention to detail ensures every client interaction reflects your brand's commitment to excellence.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Meticulous Showroom Cleaning Checklist */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Meticulous Showroom Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Floor Care & Polishing</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Specialized care for tile, concrete, or hardwood floors to maintain their pristine appearance.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Square className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Window & Glass Cleaning</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Streak-free cleaning for large plate glass windows and displays to maximize visibility.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Product & Display Dusting</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Careful, lint-free dusting of all products to maintain their showroom-ready appearance.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sofa className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-3">Client Lounges & Offices</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Creating a comfortable and impressive space for clients to enhance their experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Impact of a Perfectly Clean Showroom */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Perfectly Clean Showroom
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Positive Client Impressions</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <CountUp end={92} duration={2} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">of clients notice cleanliness as a key factor in their purchasing decision</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Increased Perceived Value</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    <CountUp end={35} duration={2} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">improvement in perceived product value with professional cleaning</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Attention to Detail Score</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    <CountUp end={98} duration={2} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">client satisfaction rating for showroom cleanliness and presentation</p>
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
                        <p className="text-muted-foreground leading-relaxed">{neighborhood.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Frequently Asked Questions</h4>
                            <div className="space-y-3">
                              {neighborhood.faq.map((faq, index) => (
                                <div key={index} className="border-l-4 border-blue-200 pl-4">
                                  <p className="font-medium text-sm">{faq.question}</p>
                                  <p className="text-muted-foreground text-sm mt-1">{faq.answer}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Customer Testimonial</h4>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-muted-foreground italic mb-3">"{neighborhood.testimonial.text}"</p>
                              <p className="text-muted-foreground text-sm font-medium">- {neighborhood.testimonial.author}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full sm:w-auto" asChild>
                            <Link to="/book-now-oahu">
                              <Phone className="w-4 h-4 mr-2" />
                              Book Showroom Cleaning in {neighborhood.name}
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
                    <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Retail Store Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Professional retail cleaning services for stores and boutiques</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/retail-cleaning/">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building className="h-8 w-8 text-primary mx-auto mb-4" />
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
                    <h3 className="text-lg font-semibold mb-2">Government Facility Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">Professional cleaning services for government buildings and facilities</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/oahu/government-facility-cleaning/">Learn More</Link>
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
                    <span className="text-lg font-semibold">What cleaning services do you provide for showrooms?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We provide comprehensive showroom cleaning services including floor polishing and care, window and glass cleaning, 
                      product dusting, display maintenance, client lounge cleaning, and specialized cleaning for automotive dealerships, 
                      furniture stores, and luxury retail spaces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">How often should showrooms be professionally cleaned?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Most showrooms benefit from daily or multiple-times-per-week cleaning, especially high-traffic areas like client lounges and product displays. 
                      The frequency depends on client traffic, product type, and presentation requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">Do you work around showroom schedules?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, we offer flexible scheduling to work around your business hours, client appointments, and operational requirements. 
                      We can provide cleaning services before opening, after closing, or during low-traffic periods to minimize disruption.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold">What if we're not satisfied with the showroom cleaning service?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      We guarantee satisfaction and will return to address any concerns at no additional charge. 
                      We understand the critical nature of product presentation and client experience in showroom environments.
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
                  alt="A pristine luxury car showroom on Oahu after professional cleaning by Red Rock Cleans"
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
                Ready to Showcase Your Products in Perfect Condition?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Join the many Oahu showrooms that trust Red Rock Cleans for professional, reliable cleaning services 
                that enhance product presentation and client experience.
              </p>
              <Button size="lg" className="h-14 text-lg px-8" asChild>
                <Link to="/book-now-oahu">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Showroom Cleaning Service
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


import { MauiNavigation } from "@/components/MauiNavigation";
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
  Calendar, 
  Home,
  Utensils,
  Dumbbell,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const towns = [
  {
    id: "wailea",
    name: "Wailea",
    description: "Wailea's upscale boutiques and retail shops trust Red Rock Cleans to maintain the pristine environment that reflects their luxury brand and attracts discerning shoppers.",
    faq: [
      {
        question: "Can you clean our Wailea boutique after hours?",
        answer: "Yes, we schedule all retail cleaning during your closed hours—evenings, early mornings, or days you're closed—to ensure zero disruption to your shopping experience and complete privacy for thorough cleaning."
      },
      {
        question: "Do you clean luxury retail in Wailea?",
        answer: "Absolutely. We specialize in high-end retail environments with meticulous attention to detail, dust-free cleaning methods, and products safe for delicate merchandise and premium finishes."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been essential to maintaining our Wailea boutique's reputation. Our store has never looked better, and customers constantly comment on the cleanliness.",
      author: "Store Manager, Wailea Luxury Boutique"
    }
  },
  {
    id: "makena",
    name: "Makena",
    description: "Makena retailers rely on our comprehensive store cleaning that creates inviting shopping environments, from sparkling storefronts to immaculate sales floors.",
    faq: [
      {
        question: "What's included in Makena retail cleaning?",
        answer: "Our comprehensive service includes sales floor care, fitting room sanitation, storefront window cleaning, restroom maintenance, back-of-house organization, and all high-touch surface disinfection."
      },
      {
        question: "How often should Makena stores schedule cleaning?",
        answer: "We recommend nightly cleaning for high-traffic stores, weekly deep cleaning for displays and fixtures, and monthly comprehensive window and floor care for optimal presentation."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans transformed our Makena shop's appearance. Their consistency and attention to detail have elevated our brand image significantly.",
      author: "Owner, Makena Beach Shop"
    }
  },
  {
    id: "kihei",
    name: "Kihei",
    description: "Kihei retail stores benefit from our meticulous cleaning that protects merchandise, creates healthy shopping spaces, and enhances the customer experience from entry to checkout.",
    faq: [
      {
        question: "Can you protect our inventory in Kihei?",
        answer: "Yes, our dust and debris control methods are specifically designed to protect merchandise. We use appropriate cleaning products for different surfaces and ensure your inventory stays pristine."
      },
      {
        question: "Do you clean fitting rooms in Kihei?",
        answer: "Absolutely. We provide intensive sanitation of fitting rooms including mirrors, benches, hooks, and all surfaces, maintaining the highest hygiene standards your customers expect."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' retail cleaning has made a huge difference in our Kihei store. Our sales have improved since customers notice how clean and inviting we are.",
      author: "Manager, Kihei Surf Shop"
    }
  },
  {
    id: "kapalua",
    name: "Kapalua",
    description: "Kapalua's premium retail establishments trust our professional cleaning to maintain the sophisticated ambiance that matches their high-end merchandise and customer expectations.",
    faq: [
      {
        question: "What products do you use in Kapalua retail stores?",
        answer: "We use premium, retail-safe cleaning products that effectively clean and disinfect without leaving residues, harsh odors, or damaging delicate merchandise and fixtures."
      },
      {
        question: "How do you clean glass displays in Kapalua?",
        answer: "We use streak-free glass cleaning techniques and microfiber cloths to ensure your display cases and windows are crystal clear, maximizing product visibility and appeal."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans understands the level of presentation our Kapalua boutique requires. Their attention to detail is perfect for our brand.",
      author: "Proprietor, Kapalua Fine Goods"
    }
  },
  {
    id: "kaanapali",
    name: "Ka'anapali",
    description: "Ka'anapali shops rely on our comprehensive retail cleaning that creates the welcoming, pristine environment that encourages browsing and drives sales.",
    faq: [
      {
        question: "Can you clean beachfront stores in Ka'anapali?",
        answer: "Yes, we specialize in cleaning Ka'anapali retail locations with unique challenges like sand, salt air, and high foot traffic from beach visitors, ensuring your store stays pristine."
      },
      {
        question: "Do you handle window cleaning in Ka'anapali?",
        answer: "Absolutely. We provide professional storefront and interior window cleaning with streak-free results that maximize visibility and create inviting first impressions for passersby."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been perfect for our Ka'anapali beachfront shop. They handle the constant sand and traffic challenges flawlessly.",
      author: "Owner, Ka'anapali Beach Wear"
    }
  },
  {
    id: "lahaina",
    name: "Lahaina",
    description: "Lahaina's historic Front Street retailers benefit from our expert cleaning that maintains the charming appeal of vintage spaces while meeting modern cleanliness expectations.",
    faq: [
      {
        question: "What are retail cleaning costs in Lahaina?",
        answer: "Retail cleaning costs vary based on store size, cleaning frequency, and specific needs. Most Lahaina retailers find our services cost-effective when considering improved customer perception and sales. Contact us for a customized quote."
      },
      {
        question: "Can you clean art galleries in Lahaina?",
        answer: "Yes, we specialize in gallery cleaning with dust-free methods, careful handling around valuable items, and appropriate products that won't damage artwork or frames."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has maintained our Lahaina gallery for three years. Their care around our artwork and consistent quality are exceptional.",
      author: "Director, Lahaina Art Gallery"
    }
  },
  {
    id: "spreckelsville",
    name: "Spreckelsville",
    description: "Spreckelsville retail locations trust our professional cleaning to create the spotless, organized shopping environment that builds customer confidence and loyalty.",
    faq: [
      {
        question: "Do you organize stockrooms in Spreckelsville?",
        answer: "Yes, our back-of-house cleaning includes organizing stockrooms, maintaining clean employee areas, and ensuring storage spaces support efficient retail operations."
      },
      {
        question: "Can you clean specialty stores in Spreckelsville?",
        answer: "Absolutely. We service all retail types—clothing boutiques, surf shops, gift stores, specialty retailers—with customized cleaning protocols for each store's unique needs."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans' systematic approach has elevated our Spreckelsville store's cleanliness standards. Our staff and customers both appreciate the difference.",
      author: "Manager, Spreckelsville Boutique"
    }
  },
  {
    id: "paia",
    name: "Pa'ia",
    description: "Pa'ia's eclectic shops rely on our expert cleaning that maintains their unique character while ensuring the modern cleanliness standards customers expect.",
    faq: [
      {
        question: "Can you clean vintage stores in Pa'ia?",
        answer: "Yes, we specialize in cleaning vintage and antique retail with gentle methods appropriate for older fixtures and merchandise, maintaining authenticity while ensuring cleanliness."
      },
      {
        question: "How quickly can you start in Pa'ia?",
        answer: "We can typically begin service within 48 hours of initial contact, including a thorough store assessment and customized cleaning protocol development."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans gets our Pa'ia shop's vibe perfectly. They keep us spotless while respecting the character that makes us unique.",
      author: "Owner, Pa'ia Vintage Collective"
    }
  },
  {
    id: "kuau",
    name: "Kuau",
    description: "Kuau retail locations benefit from our comprehensive cleaning that ensures every customer enjoys a pleasant, hygienic shopping experience from the moment they enter.",
    faq: [
      {
        question: "What's included in Kuau retail cleaning?",
        answer: "Our comprehensive service includes floor care, display dusting, fitting room sanitation, window cleaning, restroom maintenance, and high-touch surface disinfection tailored to your store's layout."
      },
      {
        question: "Can you work around our Kuau schedule?",
        answer: "Absolutely. We schedule cleaning during your closed hours with flexible timing for evenings, early mornings, or days you're closed to ensure zero disruption to your business."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has been reliable and thorough for our Kuau shop. Their flexibility and quality service are exactly what we need.",
      author: "Manager, Kuau Surf & Style"
    }
  },
  {
    id: "haiku",
    name: "Ha'iku",
    description: "Ha'iku retail stores trust Red Rock Cleans to maintain the pristine, welcoming environment that enhances their brand and creates memorable shopping experiences.",
    faq: [
      {
        question: "What makes Ha'iku retail cleaning unique?",
        answer: "Ha'iku's stores often have unique layouts and merchandise. We customize our cleaning approach to protect your specific inventory while maintaining the inviting atmosphere that drives sales."
      },
      {
        question: "Can you train our staff in Ha'iku?",
        answer: "Yes, we offer training sessions for your retail staff on basic cleaning maintenance, spill response, and keeping your store pristine between our professional cleaning visits."
      }
    ],
    testimonial: {
      text: "Red Rock Cleans has transformed our Ha'iku store's appearance. The professionalism and results have exceeded our expectations completely.",
      author: "Owner, Ha'iku Country Store"
    }
  }
];

const RetailCleaningMauiPage = () => {
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
        <title>Retail Store Cleaning Maui | Red Rock Cleans</title>
        <meta name="description" content="Professional retail store cleaning on Maui. Red Rock Cleans helps enhance your brand image and customer experience with spotless storefronts and sales floors in Wailea, Lahaina, and beyond." />
        <meta name="keywords" content="retail cleaning near me, store cleaning Maui, boutique cleaning Wailea, shop cleaning Lahaina, Maui retail cleaning services, best retail cleaners Maui, commercial store cleaning Maui, storefront window cleaning Maui, retail floor care Maui, retail cleaning cost Maui, store cleaning prices Maui, retail cleaning checklist Maui, hire store cleaners in Maui" />
        <link rel="canonical" href="https://redrockcleans.com/maui/retail-cleaning" />
      </Helmet>
      
      <MauiNavigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-commercial.jpg" 
              alt="Professional retail store cleaning service at a Maui boutique"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Pristine Retail Cleaning to Elevate Your Maui Brand
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                In Maui's unique retail market, a customer's perception of your brand begins with a spotless environment. Red Rock Cleans delivers comprehensive retail cleaning that creates the pristine, inviting atmosphere crucial for a positive shopping experience—for both kama'aina and visitors exploring Wailea, Lahaina, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 text-lg px-8" asChild>
                  <Link to="/commercial-quote?location=maui">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get Your Free Store Assessment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg px-8" asChild>
                  <Link to="/contact">
                    <Home className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Unforgettable Shopping Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Creating an Unforgettable Shopping Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Immaculate First Impressions</h3>
                      <p className="text-muted-foreground">
                        Crystal-clear entryways and streak-free windows attract foot traffic and invite customers inside. Our storefront cleaning ensures your shop stands out on busy Maui streets.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">A Healthy, Inviting Space</h3>
                      <p className="text-muted-foreground">
                        Thorough disinfection of high-touch areas like counters, door handles, and payment terminals creates a safe shopping environment that builds customer confidence and loyalty.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Protecting Your Merchandise</h3>
                      <p className="text-muted-foreground">
                        Meticulous dust and debris control keeps your products pristine. Our gentle cleaning methods protect delicate merchandise while maintaining the spotless presentation your brand demands.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Retail Cleaning Checklist Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Comprehensive Retail Cleaning Checklist
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Store className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Sales Floor & Displays</h3>
                      <p className="text-muted-foreground">
                        Floor polishing, carpet care, and meticulous dusting of all fixtures, shelving, and display cases to showcase your merchandise in the best light.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <AppWindow className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Fitting Rooms & Restrooms</h3>
                      <p className="text-muted-foreground">
                        Maintaining the highest standards of hygiene in your most personal spaces with intensive sanitation and restocking for customer comfort.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <PictureInPicture className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Windows & Storefront</h3>
                      <p className="text-muted-foreground">
                        Streak-free glass cleaning for maximum visibility and curb appeal. Clean windows invite customers in and showcase your products beautifully.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Archive className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Back-of-House & Stockrooms</h3>
                      <p className="text-muted-foreground">
                        Keeping employee areas clean, organized, and efficient with systematic stockroom organization and workspace maintenance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Professional Cleaning Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                The Impact of a Professionally Cleaned Store
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    95%
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Positive Customer Impressions</h3>
                  <p className="text-muted-foreground text-sm">
                    Shoppers report cleanliness as key to their store experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={200} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Enhanced Brand Image</h3>
                  <p className="text-muted-foreground text-sm">
                    Maui retailers trust our services for their reputation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={15} duration={2} />+
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hours Saved for Your Staff</h3>
                  <p className="text-muted-foreground text-sm">
                    Weekly time your team can focus on customers, not cleaning
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
                Areas We Serve on Maui
              </h2>
              
              {/* Town Selector */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={openAccordion}
                    onChange={(e) => {
                      const value = e.target.value;
                      setOpenAccordion(value);
                      window.location.hash = value;
                      // Scroll to the accordion item
                      setTimeout(() => {
                        const element = document.getElementById(value);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select a Maui Town</option>
                    {towns.map((town) => (
                      <option key={town.id} value={town.id}>
                        {town.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Accordion type="single" value={openAccordion} onValueChange={handleAccordionChange} className="space-y-4">
                {towns.map((town) => (
                  <AccordionItem key={town.id} value={town.id} id={town.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <h3 className="text-lg font-semibold">{town.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{town.description}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2">Local Retail Cleaning Services</h4>
                          <p className="text-muted-foreground">
                            {town.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
                          <div className="space-y-2">
                            {town.faq.map((faq, index) => (
                              <div key={index}>
                                <p className="font-medium text-sm">{faq.question}</p>
                                <p className="text-muted-foreground text-sm">{faq.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="italic text-sm mb-2">"{town.testimonial.text}"</p>
                          <p className="text-sm font-medium">- {town.testimonial.author}</p>
                        </div>
                        
                        <Button asChild className="w-full">
                          <Link to="/commercial-quote?location=maui">
                            Get Retail Cleaning Quote for {town.name}
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
                Other Commercial Cleaning Services on Maui
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Utensils className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Restaurant Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Health code compliant kitchen and dining room cleaning
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/restaurant-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Dumbbell className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Gym Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Hygienic fitness center and equipment sanitation
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/gym-cleaning">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Stethoscope className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Medical Office Cleaning</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HIPAA compliant healthcare facility cleaning
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/maui/medical-office-cleaning">Learn More</Link>
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
                <AccordionItem value="what-included" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What's included in retail store cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Our comprehensive retail cleaning includes sales floor care (vacuuming, mopping, polishing), display and fixture dusting, fitting room sanitation, storefront and interior window cleaning, restroom maintenance, back-of-house organization, and high-touch surface disinfection. We customize our service to your store's specific layout and merchandise.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="protect-merchandise" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">How do you protect merchandise during cleaning?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      We use dust-free cleaning methods, appropriate products for different surfaces, and careful techniques around delicate merchandise. Our staff is trained to work around inventory without touching products, and we use retail-safe cleaning solutions that won't leave residues or damage fabrics, electronics, or specialty items.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="window-cleaning" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">Do you provide storefront window cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Yes, professional window cleaning is a key part of our retail service. We provide streak-free cleaning of both exterior storefronts and interior windows, glass doors, and display cases using professional-grade equipment and techniques. Clean windows maximize visibility, showcase products, and create inviting first impressions for passersby.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cost" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-lg font-semibold">What is the cost of retail cleaning on Maui?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <p className="text-muted-foreground">
                      Retail cleaning costs vary based on store size, cleaning frequency, specific services needed, and your location on Maui. Most retailers find our services cost-effective when considering improved customer perception, enhanced brand image, and time saved for staff to focus on sales. We provide transparent pricing with detailed quotes. Contact us for a free assessment and customized proposal for your store.
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
              Ready to Elevate Your Store's Brand Image?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Maui's leading retailers that trust Red Rock Cleans for pristine shopping environments
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/commercial-quote?location=maui">Get Your Free Retail Cleaning Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/static/service-products.jpg" 
                alt="A bright, clean luxury retail store on Maui, cleaned by Red Rock Cleans"
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

export default RetailCleaningMauiPage;

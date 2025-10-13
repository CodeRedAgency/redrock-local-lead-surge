import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Heart, BookOpen, Badge, Monitor, Users, Activity, Apple, GraduationCap, Building, Calendar } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const SchoolCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>School Cleaning Services | Red Rock Cleans</title>
        <meta name="description" content="Professional school cleaning services. Red Rock Cleans provides a safe and healthy learning environment for students and staff with our comprehensive janitorial services." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[500px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroCommercial})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Safe & Healthy School Cleaning Services</h1>
              <p className="text-xl md:text-2xl mb-8">
                Creating clean, safe learning environments that support student success and staff well-being
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-muted-foreground mb-12">
                  A clean school is fundamental to student health, attendance, and a positive learning environment. Our specialized school cleaning services go beyond basic janitorial work to create safe, healthy spaces where students can focus on learning and teachers can focus on teaching, ensuring every educational facility meets the highest standards of cleanliness and safety.
                </p>

                {/* A Higher Standard for Student & Staff Well-being */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">A Higher Standard for Student & Staff Well-being</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Heart className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Health & Safety First</h3>
                        <p className="text-sm text-muted-foreground">
                          We use green, non-toxic products specifically designed for educational environments to reduce germs and allergens while protecting the health of students, teachers, and staff.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <BookOpen className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Creating a Positive Learning Environment</h3>
                        <p className="text-sm text-muted-foreground">
                          A clean, distraction-free space improves student focus and concentration, creating an optimal environment for learning and academic achievement.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Badge className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Trained & Vetted Professionals</h3>
                        <p className="text-sm text-muted-foreground">
                          All our staff undergo thorough background checks and receive specialized training in educational facility cleaning protocols, ensuring safety and peace of mind for schools.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Our Comprehensive School Cleaning Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive School Cleaning Checklist</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Monitor className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Classrooms & Labs</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Desk and chair disinfection</li>
                          <li>• Whiteboard and screen cleaning</li>
                          <li>• High-touch surface sanitization</li>
                          <li>• Lab equipment cleaning</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Users className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Hallways & Common Areas</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• High-traffic floor care</li>
                          <li>• Locker cleaning and sanitization</li>
                          <li>• Handrail and door handle cleaning</li>
                          <li>• Trash and recycling management</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Activity className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Gymnasiums & Auditoriums</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Large-scale floor maintenance</li>
                          <li>• Sports equipment sanitization</li>
                          <li>• Bleacher and seating cleaning</li>
                          <li>• Stage and performance area care</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <Apple className="w-12 h-12 text-primary mx-auto group-hover:animate-pulse transition-all duration-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Restrooms & Cafeterias</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                          <li>• Intensive sanitation protocols</li>
                          <li>• Food service area cleaning</li>
                          <li>• Table and seating sanitization</li>
                          <li>• Waste management systems</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* The Impact of a Professionally Cleaned School */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">The Impact of a Professionally Cleaned School</h2>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="mb-4">
                        <GraduationCap className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">10,000+</div>
                      <h3 className="text-xl font-semibold mb-2">Students & Staff Protected</h3>
                      <p className="text-primary-foreground/80">
                        Creating safe, healthy environments for learning and teaching
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Building className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">200+</div>
                      <h3 className="text-xl font-semibold mb-2">Educational Facilities Served</h3>
                      <p className="text-primary-foreground/80">
                        From elementary schools to universities across multiple states
                      </p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <Calendar className="w-16 h-16 mx-auto animate-pulse" />
                      </div>
                      <div className="text-6xl font-bold mb-2">15%</div>
                      <h3 className="text-xl font-semibold mb-2">Improved Attendance Days</h3>
                      <p className="text-primary-foreground/80">
                        Cleaner environments lead to healthier students and fewer sick days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Find School Cleaning In Your Area */}
                <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Find School Cleaning In Your Area</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link 
                      to="/las-vegas/school-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Las Vegas
                    </Link>
                    <Link 
                      to="/dallas/school-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Dallas
                    </Link>
                    <Link 
                      to="/south-florida/school-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      South Florida
                    </Link>
                    <Link 
                      to="/columbus-ohio/school-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Columbus, Ohio
                    </Link>
                    <Link 
                      to="/maui/school-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Maui
                    </Link>
                    <Link 
                      to="/oahu/school-cleaning/" 
                      className="bg-muted p-4 rounded-lg hover:bg-muted/80 transition-colors text-center font-medium"
                    >
                      Oahu
                    </Link>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-muted/30 p-8 rounded-lg mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What cleaning products do you use in schools?</AccordionTrigger>
                      <AccordionContent>
                        We use EPA-approved, green cleaning products that are safe for educational environments. Our products are non-toxic, hypoallergenic, and specifically formulated to be safe for children while effectively eliminating germs and bacteria.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do your staff undergo background checks?</AccordionTrigger>
                      <AccordionContent>
                        Yes, all our cleaning staff undergo comprehensive background checks and drug testing. We understand the importance of safety in educational environments and ensure all team members are thoroughly vetted before working in schools.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>When do you typically clean schools?</AccordionTrigger>
                      <AccordionContent>
                        We primarily clean schools after hours and during school breaks to minimize disruption to educational activities. We can also provide light maintenance cleaning during school hours for high-traffic areas like restrooms and cafeterias.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do you handle specialized areas like science labs?</AccordionTrigger>
                      <AccordionContent>
                        Our team is trained in specialized cleaning protocols for science labs, art rooms, and other specialized areas. We use appropriate cleaning products and techniques for each area while following all safety protocols and regulations.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-primary/5 rounded-lg shadow-inner">
                  <h2 className="text-4xl font-bold mb-6">Ready to Create a Safer Learning Environment?</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose your location to get a tailored quote for professional school cleaning services.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/">Find Your Location & Get a Quote</Link>
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

export default SchoolCleaningPage;

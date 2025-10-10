import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calculator, MapPin, Clock, CheckCircle } from "lucide-react";

const CommercialCleaningEstimator = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Cleaning Cost Estimator | Red Rock Cleaning</title>
        <meta name="description" content="Calculate your commercial cleaning costs instantly. Get accurate pricing for office, retail, and business cleaning services across all our locations." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 rounded-full p-4">
                    <Calculator className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Commercial Cleaning Cost Estimator</h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Get instant pricing for your commercial cleaning needs
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Available in all locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Instant quotes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No commitment required</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Calculator Card */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building2 className="w-6 h-6 text-primary" />
                          Commercial Cleaning Calculator
                        </CardTitle>
                        <CardDescription>
                          Select your location and get an instant quote for commercial cleaning services
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <Button asChild className="h-16 text-lg">
                              <Link to="/south-florida-calculator">
                                <MapPin className="w-5 h-5 mr-2" />
                                South Florida
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-16 text-lg">
                              <Link to="/las-vegas-calculator">
                                <MapPin className="w-5 h-5 mr-2" />
                                Las Vegas
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-16 text-lg">
                              <Link to="/oahu-calculator">
                                <MapPin className="w-5 h-5 mr-2" />
                                Oahu
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-16 text-lg">
                              <Link to="/maui-calculator">
                                <MapPin className="w-5 h-5 mr-2" />
                                Maui
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-16 text-lg">
                              <Link to="/columbus-ohio-calculator">
                                <MapPin className="w-5 h-5 mr-2" />
                                Columbus Ohio
                              </Link>
                            </Button>
                            <Button asChild variant="outline" className="h-16 text-lg">
                              <Link to="/dallas-calculator">
                                <MapPin className="w-5 h-5 mr-2" />
                                Dallas
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Info Card */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>What's Included</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Office Cleaning</p>
                            <p className="text-sm text-muted-foreground">Desks, floors, restrooms, break rooms</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Retail Spaces</p>
                            <p className="text-sm text-muted-foreground">Store floors, displays, customer areas</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Medical Facilities</p>
                            <p className="text-sm text-muted-foreground">Sanitization, waiting rooms, exam rooms</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Industrial Spaces</p>
                            <p className="text-sm text-muted-foreground">Warehouses, manufacturing areas</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Pricing Factors</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Square footage</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Cleaning frequency</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Service type</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Special requirements</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Location</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Commercial Cleaning?</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">After-hours, weekend, or custom schedules to fit your business needs.</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Bonded & Insured</h3>
                    <p className="text-muted-foreground">Fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Consistent Quality</h3>
                    <p className="text-muted-foreground">Trained professionals delivering consistent, high-quality results.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Your Commercial Cleaning Quote?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Select your location above to get an instant, accurate quote for your commercial cleaning needs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us for Custom Quote</Link>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CommercialCleaningEstimator;

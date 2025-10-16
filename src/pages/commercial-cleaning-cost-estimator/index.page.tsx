import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Hospital, School, UtensilsCrossed, Store, Warehouse, Dumbbell, Shapes, MapPin, ClipboardCheck, Repeat, ChevronLeft, ChevronRight } from "lucide-react";

type FacilityType = "Office" | "Medical" | "School" | "Restaurant" | "Retail" | "Warehouse" | "Gym" | "Other";

const facilityCards: { key: FacilityType; label: string; icon: React.ComponentType<any> }[] = [
  { key: "Office", label: "Office", icon: Building2 },
  { key: "Medical", label: "Medical", icon: Hospital },
  { key: "School", label: "School", icon: School },
  { key: "Restaurant", label: "Restaurant", icon: UtensilsCrossed },
  { key: "Retail", label: "Retail", icon: Store },
  { key: "Warehouse", label: "Warehouse/Industrial", icon: Warehouse },
  { key: "Gym", label: "Gym", icon: Dumbbell },
  { key: "Other", label: "Other", icon: Shapes },
];

const HOURLY_RATES = {
  National: { min: 35, max: 50 },
  Oahu: { min: 50, max: 70 },
  Maui: { min: 50, max: 70 },
  "Las Vegas": { min: 40, max: 60 },
  Dallas: { min: 40, max: 60 },
  "South Florida": { min: 40, max: 60 },
  "Columbus, Ohio": { min: 35, max: 55 },
};

export default function CommercialCleaningCostEstimatorPage() {
  const [step, setStep] = useState<number>(1);
  const [facilityType, setFacilityType] = useState<FacilityType | null>(null);
  const [squareFeet, setSquareFeet] = useState<number>(5000);
  const [restrooms, setRestrooms] = useState<number>(2);
  const [congestion, setCongestion] = useState<"Open" | "Standard" | "Dense">("Standard");
  const [frequency, setFrequency] = useState<"One-Time" | "Daily" | "5x/week" | "3x/week" | "Weekly">("Weekly");
  const [location, setLocation] = useState<keyof typeof HOURLY_RATES | "">("");
  const [animatedMonthly, setAnimatedMonthly] = useState<number>(0);

  // Production rate baseline (sq ft/hour) similar to time estimator but simplified
  const baseProductionRate = useMemo(() => {
    switch (facilityType) {
      case "Medical":
        return 1800;
      case "School":
        return 2200;
      case "Restaurant":
        return 1600;
      case "Retail":
        return 2400;
      case "Warehouse":
        return 4000;
      case "Gym":
        return 2000;
      case "Office":
        return 2600;
      case "Other":
      default:
        return 2200;
    }
  }, [facilityType]);

  const congestionModifier = useMemo(() => {
    if (congestion === "Open") return 1.25;
    if (congestion === "Dense") return 0.8;
    return 1.0;
  }, [congestion]);

  const restroomLoadHours = useMemo(() => {
    // Roughly 6-12 minutes per restroom for maintenance cleaning
    return (restrooms * 10) / 60; // hours added per visit
  }, [restrooms]);

  const visitsPerMonth = useMemo(() => {
    switch (frequency) {
      case "One-Time":
        return 1;
      case "Daily":
        return 22; // business days
      case "5x/week":
        return 22;
      case "3x/week":
        return 13;
      case "Weekly":
        return 4;
    }
  }, [frequency]);

  const hoursPerVisit = useMemo(() => {
    const effectiveRate = baseProductionRate * congestionModifier;
    const areaHours = squareFeet / Math.max(effectiveRate, 1);
    return areaHours + restroomLoadHours;
  }, [baseProductionRate, congestionModifier, restroomLoadHours, squareFeet]);

  const monthlyHours = useMemo(() => hoursPerVisit * visitsPerMonth, [hoursPerVisit, visitsPerMonth]);

  const nationalMonthlyCost = useMemo(() => {
    const rates = HOURLY_RATES.National;
    return { min: monthlyHours * rates.min, max: monthlyHours * rates.max, mid: monthlyHours * ((rates.min + rates.max) / 2) };
  }, [monthlyHours]);

  const localMonthlyCost = useMemo(() => {
    if (!location) return null;
    const rates = HOURLY_RATES[location];
    return { min: monthlyHours * rates.min, max: monthlyHours * rates.max, mid: monthlyHours * ((rates.min + rates.max) / 2) };
  }, [location, monthlyHours]);

  useEffect(() => {
    if (step === 4) {
      const target = Math.round(((localMonthlyCost?.mid ?? nationalMonthlyCost.mid) || 0) * 100) / 100;
      let current = 0;
      const interval = setInterval(() => {
        current += Math.max(target / 40, 5);
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setAnimatedMonthly(Math.round(current));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step, nationalMonthlyCost.mid, localMonthlyCost?.mid]);

  const formatMoney = (n: number) => `$${Math.round(n).toLocaleString()}`;

  const canContinue = () => {
    if (step === 1) return !!facilityType;
    if (step === 2) return squareFeet >= 1000 && squareFeet <= 50000 && restrooms >= 0;
    if (step === 3) return !!frequency;
    return true;
  };

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      <Helmet>
        <title>Commercial Cleaning Cost Estimator | Red Rock Cleans</title>
        <meta name="description" content="Get a free ballpark estimate for your commercial cleaning needs. Budget confidently using industry averages, then refine with your location." />
        <link rel="canonical" href="/commercial-cleaning-cost-estimator/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Cost Estimator</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Get a ballpark estimate based on national industry averages to help plan your cleaning budget. Then refine your estimate by selecting your service location for local labor rates.
                </p>
              </div>

              <Card className="mb-10">
                <CardHeader>
                  <CardTitle>Step {step} of 4</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Step 1: Facility Type */}
                  {step === 1 && (
                    <div>
                      <p className="text-muted-foreground mb-4">Select your facility type:</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {facilityCards.map(({ key, label, icon: Icon }) => (
                          <button
                            key={key}
                            onClick={() => { setFacilityType(key); setStep(2); }}
                            className={`group border rounded-lg p-4 text-center transition-all hover:shadow-md ${facilityType === key ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}
                          >
                            <Icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                            <div className="font-semibold">{label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Facility Details */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label htmlFor="sqft">Square Footage</Label>
                          <div className="text-sm text-muted-foreground">{squareFeet.toLocaleString()} sq ft</div>
                        </div>
                        <Slider id="sqft" value={[squareFeet]} min={1000} max={50000} step={250} onValueChange={(v) => setSquareFeet(v[0])} />
                      </div>
                      <div>
                        <Label htmlFor="restrooms" className="mb-2 block">Number of Restrooms</Label>
                        <input id="restrooms" type="number" min={0} value={restrooms} onChange={(e) => setRestrooms(Math.max(0, Number(e.target.value)))} className="w-32 px-3 py-2 border rounded-md border-border bg-background" />
                      </div>
                      <div>
                        <Label className="mb-2 block">Facility Congestion</Label>
                        <RadioGroup value={congestion} onValueChange={(v) => setCongestion(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {["Open", "Standard", "Dense"].map((c) => (
                            <div key={c} className={`border rounded-lg p-4 ${congestion === c ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                              <RadioGroupItem id={c} value={c} className="mr-2" />
                              <Label htmlFor={c}>{c}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Frequency */}
                  {step === 3 && (
                    <div>
                      <Label className="mb-2 block">Service Frequency</Label>
                      <RadioGroup value={frequency} onValueChange={(v) => setFrequency(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {["One-Time", "Daily", "5x/week", "3x/week", "Weekly"].map((f) => (
                          <div key={f} className={`border rounded-lg p-4 ${frequency === f ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id={f} value={f} className="mr-2" />
                            <Label htmlFor={f}>{f}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                  {/* Step 4: Results */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>National Average Ballpark Estimate</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground mb-1">Estimated Monthly Cost</div>
                          <div className="text-4xl font-extrabold tracking-tight">
                            {formatMoney(nationalMonthlyCost.min)} - {formatMoney(nationalMonthlyCost.max)}*
                          </div>
                          <div className="mt-2 text-muted-foreground">Median: <span className="font-semibold text-primary text-3xl align-middle">{formatMoney(animatedMonthly)}</span></div>
                          <p className="mt-3 text-xs text-muted-foreground">* Estimate uses national hourly averages of ${HOURLY_RATES.National.min}-{HOURLY_RATES.National.max} per cleaner.</p>
                        </CardContent>
                      </Card>

                      <section className="mt-4">
                        <h2 className="text-xl font-bold mb-3">Get a More Accurate Local Estimate</h2>
                        <div className="max-w-xs">
                          <Label className="mb-2 block">Choose Your Location</Label>
                          <Select value={location} onValueChange={(v) => setLocation(v as any)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.keys(HOURLY_RATES).filter((k) => k !== 'National').map((loc) => (
                                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {location && localMonthlyCost && (
                          <Card className="mt-4">
                            <CardHeader>
                              <CardTitle>Estimated Monthly Cost for {location}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-sm text-muted-foreground mb-1">Estimated Monthly Cost</div>
                              <div className="text-4xl font-extrabold tracking-tight">
                                {formatMoney(localMonthlyCost.min)} - {formatMoney(localMonthlyCost.max)}
                              </div>
                              <div className="mt-2 text-muted-foreground">Median: <span className="font-semibold text-primary text-3xl align-middle">{formatMoney(animatedMonthly)}</span></div>
                              <p className="mt-3 text-xs text-muted-foreground">Estimate uses local hourly averages of ${HOURLY_RATES[location].min}-{HOURLY_RATES[location].max} per cleaner.</p>
                            </CardContent>
                          </Card>
                        )}
                      </section>

                      <div className="text-center">
                        <Button size="lg" className="mt-4" asChild>
                          <a href="/commercial-quote/">Request a Formal, No-Obligation Quote</a>
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex items-center justify-between mt-8">
                    <Button variant="outline" onClick={prev} disabled={step === 1}>
                      <ChevronLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    {step < 4 ? (
                      <Button onClick={next} disabled={!canContinue()}>
                        Next <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button variant="secondary" onClick={() => setStep(1)}>Start Over</Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing education sections */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-3">How Commercial Cleaning is Priced</h2>
                <p className="text-muted-foreground">
                  Commercial cleaning prices reflect labor time, local wage rates, supplies and consumables, equipment use, and your exact scope of work. Our estimator blends production rates with hourly averages to provide a budgeting starting point.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-5">The 3 Key Factors That Influence Your Final Cost</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="transition-transform hover:translate-y-[-2px] hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <CardTitle>Labor & Location</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Local labor rates drive most price variance. Selecting your location above updates the hourly rate and gives a more accurate estimate.
                    </CardContent>
                  </Card>
                  <Card className="transition-transform hover:translate-y-[-2px] hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <ClipboardCheck className="w-6 h-6 text-primary" />
                      <CardTitle>Scope of Work</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Medical and food-service environments require higher disinfection standards and specialty tasks, increasing time and cost compared to standard offices.
                    </CardContent>
                  </Card>
                  <Card className="transition-transform hover:translate-y-[-2px] hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <Repeat className="w-6 h-6 text-primary" />
                      <CardTitle>Frequency & Contract</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      Higher frequency often reduces per-visit cost due to efficiency and lower buildup. Contract terms and scope consistency also impact pricing.
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                    <AccordionTrigger>Why isn't this estimate a final price?</AccordionTrigger>
                    <AccordionContent>
                      Because final pricing depends on verified square footage, layout, surfaces, exact scope, access, and service schedule. We finalize numbers after a walkthrough.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>Will a higher frequency lower my price?</AccordionTrigger>
                    <AccordionContent>
                      Typically, yes. Regular maintenance reduces buildup and improves production rates, lowering the average cost per visit.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>Do you use ISSA rates?</AccordionTrigger>
                    <AccordionContent>
                      Our estimator uses ISSA-informed production references combined with local hourly averages to approximate costs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}



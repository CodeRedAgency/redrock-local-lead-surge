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
import { Building2, Hospital, School, UtensilsCrossed, Store, Warehouse, Dumbbell, Shapes, CheckCircle2, ClipboardCheck, Square, ChevronLeft, ChevronRight } from "lucide-react";

type FacilityType = "Office" | "Medical Facility" | "School" | "Restaurant" | "Retail Store" | "Warehouse/Industrial" | "Gym" | "Other";

const facilityCards: { key: FacilityType; label: string; icon: React.ComponentType<any> }[] = [
  { key: "Office", label: "Office", icon: Building2 },
  { key: "Medical Facility", label: "Medical", icon: Hospital },
  { key: "School", label: "School", icon: School },
  { key: "Restaurant", label: "Restaurant", icon: UtensilsCrossed },
  { key: "Retail Store", label: "Retail", icon: Store },
  { key: "Warehouse/Industrial", label: "Warehouse", icon: Warehouse },
  { key: "Gym", label: "Gym", icon: Dumbbell },
  { key: "Other", label: "Other", icon: Shapes },
];

const formatHours = (h: number) => `${(Math.round(h * 10) / 10).toFixed(1)}`;

export default function CommercialCleaningTimeEstimatorPage() {
  const [step, setStep] = useState<number>(1);
  const [facilityType, setFacilityType] = useState<FacilityType | null>(null);
  const [squareFeet, setSquareFeet] = useState<number>(5000);
  const [floorType, setFloorType] = useState<"Carpet" | "Hard" | "Mixed">("Mixed");
  const [congestion, setCongestion] = useState<"Open" | "Standard" | "Dense">("Standard");
  const [frequency, setFrequency] = useState<"One-Time Deep Clean" | "Daily" | "3-5x Per Week" | "Weekly" | "Bi-Weekly">("Weekly");
  const [animatedHours, setAnimatedHours] = useState<number>(0);

  // Production rate (sq ft per hour) baseline by facility type
  const baseProductionRate = useMemo(() => {
    switch (facilityType) {
      case "Medical Facility":
        return 1800; // slower due to sanitization
      case "School":
        return 2200;
      case "Restaurant":
        return 1600; // grease, FOH/BOH complexity
      case "Retail Store":
        return 2400;
      case "Warehouse/Industrial":
        return 4000; // open layout
      case "Gym":
        return 2000;
      case "Office":
        return 2600;
      case "Other":
      default:
        return 2200;
    }
  }, [facilityType]);

  // Modifiers
  const floorModifier = useMemo(() => {
    if (floorType === "Carpet") return 0.95; // slightly faster vacuuming vs scrubbing
    if (floorType === "Hard") return 0.85; // slower for mopping/scrubbing
    return 0.9; // mixed
  }, [floorType]);

  const congestionModifier = useMemo(() => {
    if (congestion === "Open") return 1.25; // faster (more sq ft/hour)
    if (congestion === "Dense") return 0.8; // slower
    return 1.0; // standard
  }, [congestion]);

  const frequencyModifier = useMemo(() => {
    switch (frequency) {
      case "One-Time Deep Clean":
        return 0.6; // slower production (more tasks) => fewer sq ft per hour
      case "Daily":
        return 1.2; // faster per visit
      case "3-5x Per Week":
        return 1.1;
      case "Weekly":
        return 1.0;
      case "Bi-Weekly":
        return 0.9; // more build-up
    }
  }, [frequency]);

  // Estimated hours range
  const { minHours, maxHours, medianHours } = useMemo(() => {
    const effectiveRate = baseProductionRate * floorModifier * congestionModifier * frequencyModifier;
    const hours = squareFeet / Math.max(effectiveRate, 1);
    const min = Math.max(hours * 0.9, 0.25);
    const max = hours * 1.2;
    const med = (min + max) / 2;
    return { minHours: min, maxHours: max, medianHours: med };
  }, [baseProductionRate, floorModifier, congestionModifier, frequencyModifier, squareFeet]);

  useEffect(() => {
    if (step === 4) {
      let current = 0;
      const target = Math.round(medianHours * 10) / 10;
      const interval = setInterval(() => {
        current += Math.max(target / 30, 0.1);
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setAnimatedHours(Number((Math.round(current * 10) / 10).toFixed(1)));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step, medianHours]);

  const canContinue = () => {
    if (step === 1) return !!facilityType;
    if (step === 2) return squareFeet >= 1000 && squareFeet <= 50000 && !!floorType && !!congestion;
    if (step === 3) return !!frequency;
    return true;
  };

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <>
      <Helmet>
        <title>Commercial Cleaning Time Estimator | Red Rock Cleans</title>
        <meta name="description" content="Use our free tool to estimate how long professional commercial cleaning will take based on ISSA standards. Get an instant time estimate to plan your budget." />
        <link rel="canonical" href="/commercial-cleaning-time-estimator/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />

        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Time Estimator</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Get a preliminary estimate based on ISSA industry production rates to help your business plan cleaning budgets and schedules. This is an estimate only; a formal quote requires a walkthrough and scope review.
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
                        <Slider
                          id="sqft"
                          value={[squareFeet]}
                          min={1000}
                          max={50000}
                          step={250}
                          onValueChange={(v) => setSquareFeet(v[0])}
                        />
                      </div>

                      <div>
                        <Label className="mb-2 block">Floor Type</Label>
                        <RadioGroup value={floorType} onValueChange={(v) => setFloorType(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className={`border rounded-lg p-4 ${floorType === 'Carpet' ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id="carpet" value="Carpet" className="mr-2" />
                            <Label htmlFor="carpet">Mostly Carpet</Label>
                          </div>
                          <div className={`border rounded-lg p-4 ${floorType === 'Hard' ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id="hard" value="Hard" className="mr-2" />
                            <Label htmlFor="hard">Mostly Hard Floor</Label>
                          </div>
                          <div className={`border rounded-lg p-4 ${floorType === 'Mixed' ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id="mixed" value="Mixed" className="mr-2" />
                            <Label htmlFor="mixed">Mixed Flooring</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="mb-2 block">Facility Congestion</Label>
                        <RadioGroup value={congestion} onValueChange={(v) => setCongestion(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className={`border rounded-lg p-4 ${congestion === 'Open' ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id="open" value="Open" className="mr-2" />
                            <Label htmlFor="open">Open (e.g., Warehouse)</Label>
                          </div>
                          <div className={`border rounded-lg p-4 ${congestion === 'Standard' ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id="standard" value="Standard" className="mr-2" />
                            <Label htmlFor="standard">Standard (e.g., Office)</Label>
                          </div>
                          <div className={`border rounded-lg p-4 ${congestion === 'Dense' ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                            <RadioGroupItem id="dense" value="Dense" className="mr-2" />
                            <Label htmlFor="dense">Dense (e.g., Medical Clinic)</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Frequency */}
                  {step === 3 && (
                    <div>
                      <Label className="mb-2 block">Service Frequency</Label>
                      <RadioGroup value={frequency} onValueChange={(v) => setFrequency(v as any)} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {["One-Time Deep Clean", "Daily", "3-5x Per Week", "Weekly", "Bi-Weekly"].map((f) => (
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
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">Estimated Cleaning Time</div>
                        <div className="text-5xl font-extrabold tracking-tight">
                          {formatHours(minHours)} - {formatHours(maxHours)} hours
                        </div>
                        <div className="mt-3 text-muted-foreground">Median: <span className="font-semibold text-primary text-3xl align-middle">{formatHours(animatedHours)}</span> hours</div>
                        <p className="mt-4 text-sm text-muted-foreground">This estimate is based on ISSA production rates and is for budgetary purposes only.</p>
                        <Button size="lg" className="mt-6" asChild>
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

              {/* Explanations */}
              <div className="grid gap-8">
                <section>
                  <h2 className="text-2xl font-bold mb-3">How We Calculate Your Estimate (The ISSA Standard)</h2>
                  <p className="text-muted-foreground">
                    Our estimator references ISSA 540 Cleaning Times and common production rates, which reflect how many square feet a trained cleaner can service per hour based on facility type,
                    layout, and scope. Actual times vary with onsite conditions and detailed scope of work.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-5">Key Factors That Influence Cleaning Time</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="transition-transform hover:translate-y-[-2px] hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-3">
                        <Building2 className="w-6 h-6 text-primary" />
                        <CardTitle>Facility Type</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">
                        Healthcare and food-service settings require added disinfection and detailed work, resulting in slower production and longer time than standard offices.
                      </CardContent>
                    </Card>
                    <Card className="transition-transform hover:translate-y-[-2px] hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-3">
                        <Square className="w-6 h-6 text-primary" />
                        <CardTitle>Square Footage & Layout</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">
                        Large, open spaces clean faster per square foot than dense, high-touch spaces with many rooms, fixtures, and furniture.
                      </CardContent>
                    </Card>
                    <Card className="transition-transform hover:translate-y-[-2px] hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-3">
                        <ClipboardCheck className="w-6 h-6 text-primary" />
                        <CardTitle>Scope of Work</CardTitle>
                      </CardHeader>
                      <CardContent className="text-muted-foreground">
                        Standard maintenance differs from deep cleans and specialty tasks (e.g., machine scrubbing, high dusting), which impact production rates and time.
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="q1">
                      <AccordionTrigger>Is this estimate a final price?</AccordionTrigger>
                      <AccordionContent>
                        No. This tool provides a planning estimate. We provide a formal quote after a walkthrough and scope confirmation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                      <AccordionTrigger>Why is a physical walkthrough necessary?</AccordionTrigger>
                      <AccordionContent>
                        Onsite visits validate square footage, layout, surface types, and scope details that influence production rates and final pricing.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                      <AccordionTrigger>Can I use this to budget recurring services?</AccordionTrigger>
                      <AccordionContent>
                        Yes. Choose a frequency to see typical per-visit time. We’ll fine-tune after confirming your exact scope and schedule.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q4">
                      <AccordionTrigger>Do you follow ISSA standards?</AccordionTrigger>
                      <AccordionContent>
                        Yes. Our estimates and processes align with ISSA references and best practices for commercial cleaning.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}



import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Building2, Hospital, UtensilsCrossed, Warehouse, Store, Dumbbell, Scissors, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

type LocationKey = "Las Vegas" | "Oahu" | "Maui" | "South Florida" | "Dallas" | "Columbus, Ohio";
type FacilityKey = "Office" | "Medical" | "Restaurant" | "Warehouse" | "Retail" | "Gym" | "Salon/Spa" | "Other";

const LOCATIONS: { key: LocationKey; label: string }[] = [
  { key: "Las Vegas", label: "Las Vegas" },
  { key: "Oahu", label: "Oahu" },
  { key: "Maui", label: "Maui" },
  { key: "South Florida", label: "South Florida" },
  { key: "Dallas", label: "Dallas" },
  { key: "Columbus, Ohio", label: "Columbus, Ohio" },
];

const FACILITIES: { key: FacilityKey; label: string; icon: React.ComponentType<any> }[] = [
  { key: "Office", label: "Office", icon: Building2 },
  { key: "Medical", label: "Medical", icon: Hospital },
  { key: "Restaurant", label: "Restaurant", icon: UtensilsCrossed },
  { key: "Warehouse", label: "Warehouse", icon: Warehouse },
  { key: "Retail", label: "Retail", icon: Store },
  { key: "Gym", label: "Gym", icon: Dumbbell },
  { key: "Salon/Spa", label: "Salon/Spa", icon: Scissors },
  { key: "Other", label: "Other", icon: Building2 },
];

export default function CommercialQuotePage() {
  const [step, setStep] = useState<number>(1);
  const [prefilled, setPrefilled] = useState<boolean>(false);

  // Form state
  const [location, setLocation] = useState<LocationKey | "">("");
  const [facility, setFacility] = useState<FacilityKey | "">("");
  const [squareFeet, setSquareFeet] = useState<number>(10000);
  const [frequency, setFrequency] = useState<string>("Weekly");
  const [notes, setNotes] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Prefill from URL query
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type");
    const sqftParam = params.get("sqft");
    const locationParam = params.get("location");

    let changed = false;
    if (typeParam) {
      const map: Record<string, FacilityKey> = {
        office: "Office",
        medical: "Medical",
        restaurant: "Restaurant",
        warehouse: "Warehouse",
        retail: "Retail",
        gym: "Gym",
        salon: "Salon/Spa",
        other: "Other",
      };
      const val = map[typeParam.toLowerCase()];
      if (val) {
        setFacility(val);
        changed = true;
      }
    }
    if (sqftParam && !isNaN(Number(sqftParam))) {
      setSquareFeet(Number(sqftParam));
      changed = true;
    }
    if (locationParam) {
      const locMap: Record<string, LocationKey> = {
        "las-vegas": "Las Vegas",
        "oahu": "Oahu",
        "maui": "Maui",
        "south-florida": "South Florida",
        "dallas": "Dallas",
        "columbus-ohio": "Columbus, Ohio",
        "columbus": "Columbus, Ohio",
      };
      const loc = locMap[locationParam.toLowerCase()];
      if (loc) {
        setLocation(loc);
        changed = true;
      }
    }
    if (changed) {
      setPrefilled(true);
      setStep(4); // jump to contact if core details are known
    }
  }, []);

  const next = () => setStep((s) => Math.min(4, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const canContinue = useMemo(() => {
    if (step === 1) return !!location;
    if (step === 2) return !!facility;
    if (step === 3) return !!squareFeet && Number(squareFeet) > 0 && !!frequency;
    if (step === 4) return !!fullName && !!company && !!email && !!phone && consent;
    return false;
  }, [step, location, facility, squareFeet, frequency, fullName, company, email, phone, consent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      location,
      facility,
      squareFeet: Number(squareFeet) || null,
      frequency,
      notes,
      fullName,
      company,
      email,
      phone,
      consent,
      submittedAt: new Date().toISOString(),
    };
    // Simulate submission
    console.log("Commercial Quote Request:", payload);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Request a Commercial Cleaning Quote | Red Rock Cleans</title>
        <meta name="description" content="Request a free, no-obligation quote for your business. Red Rock Cleans provides custom proposals for office, industrial, medical, and other commercial cleaning services." />
        <link rel="canonical" href="/commercial-quote/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {!submitted ? (
                <>
                  <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Custom Cleaning Proposal for Your Business</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Tell us about your facility and cleaning needs, and our commercial team will prepare an accurate, no-obligation proposal. If you came from our estimator, we’ll pre-fill your details to save time.
                    </p>
                  </div>

                  <Card className="mb-10">
                    <CardHeader>
                      <CardTitle>Step {step} of 4{prefilled ? " (prefilled)" : ""}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Step 1: Location */}
                      {step === 1 && (
                        <div>
                          <h2 className="text-xl font-semibold mb-4">Where is your facility located?</h2>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {LOCATIONS.map((loc) => (
                              <button key={loc.key} onClick={() => { setLocation(loc.key); next(); }} className={`group border rounded-lg p-4 text-center transition-all hover:shadow-md ${location === loc.key ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                                <MapPin className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                                <div className="font-semibold">{loc.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 2: Facility Type */}
                      {step === 2 && (
                        <div>
                          <h2 className="text-xl font-semibold mb-4">What type of facility do you have?</h2>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {FACILITIES.map(({ key, label, icon: Icon }) => (
                              <button key={key} onClick={() => { setFacility(key); next(); }} className={`group border rounded-lg p-4 text-center transition-all hover:shadow-md ${facility === key ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                                <Icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                                <div className="font-semibold">{label}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Service Details */}
                      {step === 3 && (
                        <div className="space-y-6">
                          <h2 className="text-xl font-semibold">Tell us more about your needs</h2>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <Label htmlFor="sqft-slider">Approximate Square Footage</Label>
                              <div className="text-sm text-muted-foreground">{squareFeet.toLocaleString()} sq ft</div>
                            </div>
                            <Slider id="sqft-slider" value={[squareFeet]} min={1000} max={50000} step={250} onValueChange={(v) => setSquareFeet(v[0])} />
                          </div>
                          <div>
                            <Label className="mb-2 block">Service Frequency</Label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {['One-Time', 'Daily', '3-5x/week', 'Weekly', 'Bi-Weekly', 'Monthly'].map((f) => (
                                <button
                                  key={f}
                                  type="button"
                                  onClick={() => setFrequency(f)}
                                  className={`border rounded-lg p-3 text-center transition-all hover:shadow-md ${frequency === f ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}
                                >
                                  {f}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="notes" className="mb-2 block">Specific Needs</Label>
                            <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Tell us about any special requirements, security protocols, or specific areas of focus..." rows={4} />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Contact */}
                      {step === 4 && (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                          <h2 className="text-xl font-semibold">How can our team reach you?</h2>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="fullName" className="mb-2 block">Full Name</Label>
                              <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            </div>
                            <div>
                              <Label htmlFor="company" className="mb-2 block">Company Name</Label>
                              <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                              <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
                            <Label htmlFor="consent" className="text-sm text-muted-foreground">I consent to be contacted by Red Rock Cleans regarding this request. I understand this is a no-obligation proposal and my information will be handled in accordance with the Privacy Policy.</Label>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            By providing your phone number, you agree to receive SMS updates related to your quote request. Message and data rates may apply. Message frequency varies. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our Privacy Policy for details.
                          </p>
                          <div className="flex items-center justify-between">
                            <Button type="button" variant="outline" onClick={prev}>
                              <ChevronLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                            <Button type="submit" disabled={!canContinue}>Submit Request for Formal Proposal</Button>
                          </div>
                        </form>
                      )}

                      {/* Controls for steps 1-3 */}
                      {step < 4 && (
                        <div className="flex items-center justify-between mt-8">
                          <Button variant="outline" onClick={prev} disabled={step === 1}>
                            <ChevronLeft className="w-4 h-4 mr-2" /> Back
                          </Button>
                          <Button onClick={next} disabled={!canContinue}>
                            Next <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </>
              ) : (
                <div className="text-center bg-card p-12 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold mb-3">Thank You! We've Received Your Request.</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A member of our {location || "local"} commercial cleaning team will review your information and contact you within one business day to schedule a brief consultation and walkthrough. We look forward to partnering with you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}



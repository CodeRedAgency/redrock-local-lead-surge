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
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
      const val = typeof typeParam === 'string' ? map[typeParam.toLowerCase()] : undefined;
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
      const loc = typeof locationParam === 'string' ? locMap[locationParam.toLowerCase()] : undefined;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create a formatted message with all data in the desired order
      const formattedMessage = `
COMMERCIAL CLEANING QUOTE REQUEST
==================================

FACILITY INFORMATION:
--------------------
Location: ${location}
Facility Type: ${facility}
Square Footage: ${squareFeet.toLocaleString()} sq ft
Service Frequency: ${frequency}

SPECIAL REQUIREMENTS:
--------------------
${notes || 'None specified'}

CONTACT INFORMATION:
-------------------
Full Name: ${fullName}
Company Name: ${company}
Email Address: ${email}
Phone Number: ${phone}

CONSENT:
--------
Client consented to be contacted: Yes

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
      `.trim();
      
      // Build FormData with formatted message
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('message', formattedMessage);
      formDataToSubmit.append('_subject', `Commercial Quote Request - ${facility} in ${location}`);
      
      // Also send individual fields for Formspree's database
      formDataToSubmit.append('contact_name', fullName);
      formDataToSubmit.append('contact_email', email);
      formDataToSubmit.append('contact_phone', phone);
      formDataToSubmit.append('company_name', company);
      formDataToSubmit.append('quote_location', String(location));
      formDataToSubmit.append('facility_type', String(facility));
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xblzwdgz', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was a problem submitting your request. Please try again or contact us directly.');
        console.error('Form submission failed:', await response.text());
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your request. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('quote.pageTitle')}</title>
        <meta name="description" content={t('quote.pageDescription')} />
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('quote.requestCustomProposalTitle')}</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('quote.requestCustomProposalSubTitle')}</p>
                  </div>

                  <Card className="mb-10">
                    <CardHeader>
                      <CardTitle>{t('quote.step', { step, prefilled })}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* Step 1: Location */}
                      {step === 1 && (
                        <div>
                          <h2 className="text-xl font-semibold mb-4">{t('quote.locationPrompt')}</h2>
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
                          <h2 className="text-xl font-semibold mb-4">{t('quote.facilityTypePrompt')}</h2>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {FACILITIES.map(({ key, label, icon: Icon }) => (
                              <button key={key} onClick={() => { setFacility(key); next(); }} className={`group border rounded-lg p-4 text-center transition-all hover:shadow-md ${facility === key ? 'border-primary ring-2 ring-primary/30' : 'border-border'}`}>
                                <Icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                                <div className="font-semibold">{label}</div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-6 text-sm text-muted-foreground">
                            <p className="font-medium mb-2">{t('quote.congestionExplanationTitle')}</p>
                            <ul className="list-disc ml-5 space-y-1">
                              <li><span className="font-semibold">{t('quote.congestionOpen')}</span>: Large, open layouts with few partitions and obstacles (e.g., warehouses, showrooms). Faster to service.</li>
                              <li><span className="font-semibold">{t('quote.congestionStandard')}</span>: Typical office-style layout with a mix of rooms, hallways, furniture, and open areas.</li>
                              <li><span className="font-semibold">{t('quote.congestionDense')}</span>: Many small rooms/equipment and high-touch areas (e.g., medical clinics, restaurant BOH). Slower, more detail-oriented.</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Service Details */}
                      {step === 3 && (
                        <div className="space-y-6">
                          <h2 className="text-xl font-semibold">{t('quote.serviceDetailsPrompt')}</h2>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <Label htmlFor="sqft-slider">{t('quote.approximateSquareFootageLabel')}</Label>
                              <div className="text-sm text-muted-foreground">{squareFeet.toLocaleString()} sq ft</div>
                            </div>
                            <Slider id="sqft-slider" value={[squareFeet]} min={1000} max={50000} step={250} onValueChange={(v) => setSquareFeet(v[0])} />
                          </div>
                          <div>
                            <Label className="mb-2 block">{t('quote.serviceFrequencyLabel')}</Label>
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
                            <Label htmlFor="notes" className="mb-2 block">{t('quote.specificNeedsLabel')}</Label>
                            <Textarea id="notes" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t('quote.specificNeedsPlaceholder')} rows={4} />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Contact */}
                      {step === 4 && (
                        <form className="space-y-6" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/xblzwdgz">
                          <input type="hidden" name="form-name" value="commercial-quote-request" />
                          <input type="hidden" name="_subject" value="New Commercial Cleaning Quote Request" />
                          <input type="hidden" name="location" value={location} />
                          <input type="hidden" name="facility" value={facility} />
                          <input type="hidden" name="squareFeet" value={squareFeet} />
                          <input type="hidden" name="frequency" value={frequency} />
                          <input type="hidden" name="notes" value={notes} />
                          <div style={{ display: 'none' }}>
                            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                          </div>
                          
                          <h2 className="text-xl font-semibold">{t('quote.contactDetailsPrompt')}</h2>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="fullName" className="mb-2 block">{t('quote.fullNameLabel')}</Label>
                              <Input id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            </div>
                            <div>
                              <Label htmlFor="company" className="mb-2 block">{t('quote.companyNameLabel')}</Label>
                              <Input id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email" className="mb-2 block">{t('quote.emailAddressLabel')}</Label>
                              <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                              <Label htmlFor="phone" className="mb-2 block">{t('quote.phoneNumberLabel')}</Label>
                              <Input id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <input id="consent" name="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
                            <Label htmlFor="consent" className="text-sm text-muted-foreground">{t('quote.consentText')}</Label>
                          </div>
                          <p className="text-xs text-muted-foreground">{t('quote.smsConsentText')}</p>
                          <div className="flex items-center justify-between">
                            <Button type="button" variant="outline" onClick={prev}>
                              <ChevronLeft className="w-4 h-4 mr-2" /> {t('quote.backButton')}
                            </Button>
                            <Button type="submit" disabled={!canContinue}>{t('quote.submitButton')}</Button>
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
                  <h2 className="text-3xl font-bold mb-3">{t('quote.thankYouTitle')}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('quote.thankYouMessage')}
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



import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import {
  Leaf,
  Flower2,
  Sun,
  Droplets,
  Home,
  Wind,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plants = [
  {
    name: "Snake Plant (Sansevieria)",
    icon: Leaf,
    desc: "A near-indestructible plant that thrives in low light and requires minimal water. Ideal for bedrooms and offices.",
    care: [
      "Light: Low to bright, indirect.",
      "Water: Let soil dry between waterings.",
    ],
    pollutants: "Removes: formaldehyde, benzene, xylene, toluene."
  },
  {
    name: "Spider Plant (Chlorophytum comosum)",
    icon: Flower2,
    desc: "With cheerful arching leaves and easystarts for propagation, the Spider Plant is excellent for beginners.",
    care: [
      "Light: Bright, indirect.",
      "Water: Keep soil moist, not soggy; water when top inch is dry.",
    ],
    pollutants: "Removes: carbon monoxide, xylene, formaldehyde."
  },
  {
    name: "Peace Lily (Spathiphyllum)",
    icon: Droplets,
    desc: "Elegant white blooms and lush dark leaves make this plant not only decorative, but powerful against several toxins.",
    care: [
      "Light: Low to medium.",
      "Water: When soil is dry to the touch.",
    ],
    pollutants: "Removes: ammonia, formaldehyde, benzene, trichloroethylene."
  },
  {
    name: "Pothos (Epipremnum aureum)",
    icon: Wind,
    desc: "Also called Devil’s Ivy, Pothos is tolerant, fast-growing, and can cascade from shelves or be trained up poles.",
    care: [
      "Light: Low to bright, indirect.",
      "Water: When soil is dry.",
    ],
    pollutants: "Removes: formaldehyde, benzene, toluene, xylene."
  },
  {
    name: "Dracaena (Dracaena spp.)",
    icon: Sun,
    desc: "With dramatic foliage and height, Dracaenas make a visual statement while cleaning the air in modern spaces.",
    care: [
      "Light: Bright, indirect; avoid harsh sun.",
      "Water: Allow upper soil to dry; don’t overwater.",
    ],
    pollutants: "Removes: trichloroethylene, xylene, formaldehyde."
  },
  {
    name: "Boston Fern (Nephrolepis exaltata)",
    icon: Flower2,
    desc: "A classic for hanging baskets, Boston Ferns are lush and ideal for humid rooms like bathrooms.",
    care: [
      "Light: Bright, indirect.",
      "Water: Keep moist; mist regularly if air is dry.",
    ],
    pollutants: "Removes: formaldehyde, xylene, toluene."
  },
];

const heroImg = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80"; // Lush, healthy houseplants in a bright, clean setting

export default function NaturesAirPurifiersBlogPage() {
  return (
    <>
      <Helmet>
        <title>Nature&apos;s Air Purifiers: The Best Plants for Cleaner Indoor Air | Red Rock Cleans</title>
        <meta name="description" content="Discover the best houseplants for naturally purifying your indoor air. Our guide covers top plants, care tips, and how cleaning complements their benefits." />
        <link rel="canonical" href="/blog/cleaning-tips/natures-air-purifiers-the-best-plants-for-cleaner-indoor-air/" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        <main className="flex-grow bg-background">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={heroImg}
                alt="Lush, healthy houseplants in a bright, clean room"
                className="w-full h-full object-cover scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/60"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-xl">
                  Nature&apos;s Air Purifiers: The Best Plants for Cleaner Indoor Air
                </h1>
              </div>
            </div>
          </section>

          {/* Article */}
          <article className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-prose mx-auto">
                <p className="text-lg leading-relaxed mb-6">
                  In today&apos;s fast-paced world, most of us spend the majority of our lives indoors—whether at home, work, or places of leisure. Yet, few realize that indoor air often harbors pollutants like dust, chemicals, and allergens that can affect our well-being. Luckily, some of nature&apos;s most beautiful creations—houseplants—offer a simple, powerful way to freshen and cleanse the air we breathe.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
                  <Wind className="w-6 h-6 text-primary" /> How Do Plants Clean the Air?
                </h2>
                <p className="mb-6">
                  Through a process called phytoremediation, plants absorb toxins through their leaves and roots, breaking them down or storing them harmlessly. The NASA Clean Air Study was a landmark project that identified specific houseplants effective at filtering toxins such as formaldehyde, benzene, and trichloroethylene — improving not just air quality, but also mood and focus.
                </p>

                <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center gap-2">
                  <Sun className="w-6 h-6 text-primary" /> Best Plants for Clean Air
                </h2>
                <ul className="space-y-8 mb-8">
                  {plants.map((plant) => (
                    <li key={plant.name} className="bg-muted/30 rounded-lg p-6 shadow border-l-4 border-primary">
                      <div className="flex items-center gap-4 mb-2">
                        <plant.icon className="w-7 h-7 text-green-700" />
                        <h3 className="text-xl font-semibold">{plant.name}</h3>
                      </div>
                      <p className="mb-2">{plant.desc}</p>
                      <ul className="mb-2 list-disc list-inside ml-2 text-sm">
                        {plant.care.map((tip) => (
                          <li key={tip}>{tip}</li>
                        ))}
                      </ul>
                      <p className="text-primary font-medium text-sm flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-primary" />{plant.pollutants}
                      </p>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl font-semibold mt-12 mb-4 flex items-center gap-2">
                  <Home className="w-6 h-6 text-primary" /> Beyond Plants: Creating a Truly Healthy Home
                </h2>
                <p className="mb-4">
                  As wonderful as air-purifying plants are, some pollutants—like dust mites, bacteria, and deep-seated grime—are simply beyond their reach. Even the healthiest leaves can&apos;t vacuum under the bed or scrub away years of build-up! That&apos;s why professional cleaning remains an essential part of maintaining a healthy indoor space.
                </p>
                <p className="mb-4">
                  To give your home and your plants the ultimate fresh start, begin with a {" "}
                  <Link to="/deep-cleaning-services/" className="text-blue-700 font-semibold hover:underline">Deep Cleaning Service</Link>.
                  This thorough approach eliminates old contaminants, allowing your chosen plants to work their natural magic from a clean slate. Afterward, ongoing {" "}
                  <Link to="/standard-cleaning-services/" className="text-blue-700 font-semibold hover:underline">Standard Cleaning Services</Link> help keep dust, allergens, and indoor toxins at bay—creating a safe, nurturing environment for you and your green companions.
                </p>
                <p className="mb-6">
                  The partnership between plants and regular cleaning is the secret to truly clean, healthy air at home. Breathe deeply, relax, and enjoy the happy energy that thriving plants bring to your indoor world!
                </p>
                <h2 className="text-2xl font-semibold mt-12 mb-4">Conclusion</h2>
                <p>
                  By inviting air-purifying plants into your home and supporting their superpowers with quality cleaning, you&apos;ll improve air quality, boost your mood, and create a beautifully vibrant space. Here&apos;s to greener, fresher, healthier living—one plant and one cleaning at a time!
                </p>
              </div>
            </div>
          </article>

          {/* CTA Card */}
          <Card className="mt-12 mb-12 max-w-prose mx-auto border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl text-center">Ready for a Breath of Fresh Air?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4">Discover how our expert cleaning services can create the perfect environment for your plants—and your wellbeing!</p>
              <Button size="lg" className="w-full" asChild>
                <Link to="/">Explore Our Cleaning Services</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}

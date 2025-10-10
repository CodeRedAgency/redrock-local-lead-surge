import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ResidentialCleaning from "./pages/ResidentialCleaning";
import CommercialCleaning from "./pages/CommercialCleaning";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";
import StandardVsDeep from "./pages/StandardVsDeep";
import StandardCleaning from "./pages/StandardCleaning";
import DeepCleaning from "./pages/DeepCleaning";
import AirbnbCleaning from "./pages/AirbnbCleaning";
import PostConstruction from "./pages/PostConstruction";
import MoveOutCleaning from "./pages/MoveOutCleaning";
import CommercialCleaningEstimator from "./pages/CommercialCleaningEstimator";
import Blog from "./pages/Blog";
import HiringRequirements from "./pages/HiringRequirements";
import MaidilyApp from "./pages/MaidilyApp";
import SouthFloridaHome from "./pages/locations/SouthFloridaHome";
import SouthFloridaCalculator from "./pages/locations/SouthFloridaCalculator";
import SouthFloridaBooking from "./pages/locations/SouthFloridaBooking";
import LasVegasHome from "./pages/locations/LasVegasHome";
import LasVegasCalculator from "./pages/locations/LasVegasCalculator";
import LasVegasBooking from "./pages/locations/LasVegasBooking";
import OahuHome from "./pages/locations/OahuHome";
import OahuCalculator from "./pages/locations/OahuCalculator";
import OahuBooking from "./pages/locations/OahuBooking";
import MauiHome from "./pages/locations/MauiHome";
import MauiCalculator from "./pages/locations/MauiCalculator";
import MauiBooking from "./pages/locations/MauiBooking";
import ColumbusHome from "./pages/locations/ColumbusHome";
import ColumbusCalculator from "./pages/locations/ColumbusCalculator";
import ColumbusBooking from "./pages/locations/ColumbusBooking";
import DallasHome from "./pages/locations/DallasHome";
import DallasCalculator from "./pages/locations/DallasCalculator";
import DallasBooking from "./pages/locations/DallasBooking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* General Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/faq" element={<FAQ />} />
          <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
          <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions-page" element={<TermsAndConditions />} />
          <Route path="/privacy-policy-page" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Services Pages */}
          <Route path="/blog/standard-cleaning-vs-deep-cleaning" element={<StandardVsDeep />} />
          <Route path="/standard-cleaning-services" element={<StandardCleaning />} />
          <Route path="/deep-cleaning-services" element={<DeepCleaning />} />
          <Route path="/airbnb-cleaning-services" element={<AirbnbCleaning />} />
          <Route path="/post-construction-cleaning-services" element={<PostConstruction />} />
          <Route path="/move-out-cleaning-services" element={<MoveOutCleaning />} />
          <Route path="/commercial-cleaning-estimator" element={<CommercialCleaningEstimator />} />
          
          {/* Blog & Hiring */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/hiring-req" element={<HiringRequirements />} />
          <Route path="/hiring-application/how-to-use-the-maidily-mobile-app" element={<MaidilyApp />} />
          
          {/* South Florida Routes */}
          <Route path="/home-south-florida" element={<SouthFloridaHome />} />
          <Route path="/south-florida" element={<SouthFloridaCalculator />} />
          <Route path="/book-now-southflorida" element={<SouthFloridaBooking />} />
          
          {/* Las Vegas Routes */}
          <Route path="/home-las-vegas" element={<LasVegasHome />} />
          <Route path="/las-vegas" element={<LasVegasCalculator />} />
          <Route path="/book-now-vegas" element={<LasVegasBooking />} />
          
          {/* Oahu Routes */}
          <Route path="/home-oahu" element={<OahuHome />} />
          <Route path="/oahu" element={<OahuCalculator />} />
          <Route path="/book-now-honolulu" element={<OahuBooking />} />
          
          {/* Maui Routes */}
          <Route path="/home-maui" element={<MauiHome />} />
          <Route path="/maui" element={<MauiCalculator />} />
          <Route path="/book-now-maui" element={<MauiBooking />} />
          
          {/* Columbus Ohio Routes */}
          <Route path="/home-columbus-ohio" element={<ColumbusHome />} />
          <Route path="/columbus-ohio" element={<ColumbusCalculator />} />
          <Route path="/book-now-columbus-ohio" element={<ColumbusBooking />} />
          
          {/* Dallas Routes */}
          <Route path="/home-dallas" element={<DallasHome />} />
          <Route path="/dallas" element={<DallasCalculator />} />
          <Route path="/book-now-dallas" element={<DallasBooking />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

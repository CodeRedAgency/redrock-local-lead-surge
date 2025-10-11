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
import AirbnbCleaningLasVegasPage from "./pages/las-vegas/airbnb-cleaning-services/+Page";
import StandardCleaningLasVegasPage from "./pages/las-vegas/standard-cleaning-services/+Page";
import DeepCleaningLasVegasPage from "./pages/las-vegas/deep-cleaning-services/+Page";
import MoveOutCleaningLasVegasPage from "./pages/las-vegas/move-out-cleaning-services/+Page";
import PostConstructionCleaningLasVegasPage from "./pages/las-vegas/post-construction-cleaning-services/+Page";
import MoveOutCleaningOahuPage from "./pages/oahu/move-out-cleaning-services/+Page";
import StandardCleaningOahuPage from "./pages/oahu/standard-cleaning-services/+Page";
import DeepCleaningOahuPage from "./pages/oahu/deep-cleaning-services/+Page";
import AirbnbCleaningOahuPage from "./pages/oahu/airbnb-cleaning-services/+Page";
import PostConstructionCleaningOahuPage from "./pages/oahu/post-construction-cleaning-services/+Page";
import PostConstructionCleaningSouthFloridaPage from "./pages/south-florida/post-construction-cleaning-services/+Page";
import StandardCleaningSouthFloridaPage from "./pages/south-florida/standard-cleaning-services/+Page";
import DeepCleaningSouthFloridaPage from "./pages/south-florida/deep-cleaning-services/+Page";
import MoveOutCleaningSouthFloridaPage from "./pages/south-florida/move-out-cleaning-services/+Page";
import AirbnbCleaningSouthFloridaPage from "./pages/south-florida/airbnb-cleaning-services/+Page";
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
          <Route path="/las-vegas/airbnb-cleaning-services" element={<AirbnbCleaningLasVegasPage />} />
          <Route path="/las-vegas/standard-cleaning-services" element={<StandardCleaningLasVegasPage />} />
          <Route path="/las-vegas/deep-cleaning-services" element={<DeepCleaningLasVegasPage />} />
          <Route path="/las-vegas/move-out-cleaning-services" element={<MoveOutCleaningLasVegasPage />} />
          <Route path="/las-vegas/post-construction-cleaning-services" element={<PostConstructionCleaningLasVegasPage />} />
          
          {/* Blog & Hiring */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/hiring-req" element={<HiringRequirements />} />
          <Route path="/hiring-application/how-to-use-the-maidily-mobile-app" element={<MaidilyApp />} />
          
          {/* South Florida Routes */}
          <Route path="/south-florida" element={<SouthFloridaHome />} />
          <Route path="/south-florida-calculator" element={<SouthFloridaCalculator />} />
          <Route path="/book-now-southflorida" element={<SouthFloridaBooking />} />
          
          {/* Las Vegas Routes */}
          <Route path="/las-vegas" element={<LasVegasHome />} />
          <Route path="/las-vegas-calculator" element={<LasVegasCalculator />} />
          <Route path="/book-now-vegas" element={<LasVegasBooking />} />
          
          {/* Oahu Routes */}
          <Route path="/oahu" element={<OahuHome />} />
          <Route path="/oahu-calculator" element={<OahuCalculator />} />
          <Route path="/book-now-honolulu" element={<OahuBooking />} />
          <Route path="/oahu/move-out-cleaning-services" element={<MoveOutCleaningOahuPage />} />
          <Route path="/oahu/standard-cleaning-services" element={<StandardCleaningOahuPage />} />
          <Route path="/oahu/deep-cleaning-services" element={<DeepCleaningOahuPage />} />
          <Route path="/oahu/airbnb-cleaning-services" element={<AirbnbCleaningOahuPage />} />
          <Route path="/oahu/post-construction-cleaning-services" element={<PostConstructionCleaningOahuPage />} />
        <Route path="/south-florida/post-construction-cleaning-services" element={<PostConstructionCleaningSouthFloridaPage />} />
        <Route path="/south-florida/standard-cleaning-services" element={<StandardCleaningSouthFloridaPage />} />
        <Route path="/south-florida/deep-cleaning-services" element={<DeepCleaningSouthFloridaPage />} />
        <Route path="/south-florida/move-out-cleaning-services" element={<MoveOutCleaningSouthFloridaPage />} />
        <Route path="/south-florida/airbnb-cleaning-services" element={<AirbnbCleaningSouthFloridaPage />} />
          
          {/* Maui Routes */}
          <Route path="/maui" element={<MauiHome />} />
          <Route path="/maui-calculator" element={<MauiCalculator />} />
          <Route path="/book-now-maui" element={<MauiBooking />} />
          
          {/* Columbus Ohio Routes */}
          <Route path="/columbus-ohio" element={<ColumbusHome />} />
          <Route path="/columbus-ohio-calculator" element={<ColumbusCalculator />} />
          <Route path="/book-now-columbus-ohio" element={<ColumbusBooking />} />
          
          {/* Dallas Routes */}
          <Route path="/dallas" element={<DallasHome />} />
          <Route path="/dallas-calculator" element={<DallasCalculator />} />
          <Route path="/book-now-dallas" element={<DallasBooking />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

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
import ChurchCleaningLasVegasPage from "./pages/las-vegas/church-cleaning/+Page";
import DataCenterCleaningLasVegasPage from "./pages/las-vegas/data-center-cleaning/+Page";
import FactoryCleaningLasVegasPage from "./pages/las-vegas/factory-cleaning/+Page";
import GovernmentFacilityCleaningLasVegasPage from "./pages/las-vegas/government-facility-cleaning/+Page";
import GymCleaningLasVegasPage from "./pages/las-vegas/gym-cleaning/+Page";
import IndustrialCleaningLasVegasPage from "./pages/las-vegas/industrial-cleaning/+Page";
import MedicalOfficeCleaningLasVegasPage from "./pages/las-vegas/medical-office-cleaning/+Page";
import RestaurantCleaningLasVegasPage from "./pages/las-vegas/restaurant-cleaning/+Page";
import RetailCleaningLasVegasPage from "./pages/las-vegas/retail-cleaning/+Page";
import ShowroomCleaningLasVegasPage from "./pages/las-vegas/showroom-cleaning/+Page";
import WarehouseCleaningLasVegasPage from "./pages/las-vegas/warehouse-cleaning/+Page";
import SalonSpaCleaningLasVegasPage from "./pages/las-vegas/salon-spa-cleaning/+Page";
import SchoolCleaningLasVegasPage from "./pages/las-vegas/school-cleaning/+Page";
import MoveOutCleaningOahuPage from "./pages/oahu/move-out-cleaning-services/+Page";
import StandardCleaningOahuPage from "./pages/oahu/standard-cleaning-services/+Page";
import DeepCleaningOahuPage from "./pages/oahu/deep-cleaning-services/+Page";
import AirbnbCleaningOahuPage from "./pages/oahu/airbnb-cleaning-services/+Page";
import PostConstructionCleaningOahuPage from "./pages/oahu/post-construction-cleaning-services/+Page";
import ChurchCleaningOahuPage from "./pages/oahu/church-cleaning/+Page";
import DataCenterCleaningOahuPage from "./pages/oahu/data-center-cleaning/+Page";
import FactoryCleaningOahuPage from "./pages/oahu/factory-cleaning/+Page";
import GovernmentFacilityCleaningOahuPage from "./pages/oahu/government-facility-cleaning/+Page";
import GymCleaningOahuPage from "./pages/oahu/gym-cleaning/+Page";
import IndustrialCleaningOahuPage from "./pages/oahu/industrial-cleaning/+Page";
import MedicalOfficeCleaningOahuPage from "./pages/oahu/medical-office-cleaning/+Page";
import RestaurantCleaningOahuPage from "./pages/oahu/restaurant-cleaning/+Page";
import RetailCleaningOahuPage from "./pages/oahu/retail-cleaning/+Page";
import SchoolCleaningOahuPage from "./pages/oahu/school-cleaning/+Page";
import ShowroomCleaningOahuPage from "./pages/oahu/showroom-cleaning/+Page";
import WarehouseCleaningOahuPage from "./pages/oahu/warehouse-cleaning/+Page";
import SalonSpaCleaningOahuPage from "./pages/oahu/salon-spa-cleaning/+Page";
import PostConstructionCleaningMauiPage from "./pages/maui/post-construction-cleaning-services/+Page";
import MoveOutCleaningMauiPage from "./pages/maui/move-out-cleaning-services/+Page";
import DeepCleaningMauiPage from "./pages/maui/deep-cleaning-services/+Page";
import StandardCleaningMauiPage from "./pages/maui/standard-cleaning-services/+Page";
import PostConstructionCleaningDallasPage from "./pages/dallas/post-construction-cleaning-services/+Page";
import AirbnbCleaningDallasPage from "./pages/dallas/airbnb-cleaning-services/+Page";
import MoveOutCleaningDallasPage from "./pages/dallas/move-out-cleaning-services/+Page";
import DeepCleaningDallasPage from "./pages/dallas/deep-cleaning-services/+Page";
import StandardCleaningDallasPage from "./pages/dallas/standard-cleaning-services/+Page";
import AirbnbCleaningMauiPage from "./pages/maui/airbnb-cleaning-services/+Page";
import ChurchCleaningMauiPage from "./pages/maui/church-cleaning/+Page";
import DataCenterCleaningMauiPage from "./pages/maui/data-center-cleaning/+Page";
import FactoryCleaningMauiPage from "./pages/maui/factory-cleaning/+Page";
import GovernmentFacilityCleaningMauiPage from "./pages/maui/government-facility-cleaning/+Page";
import GymCleaningMauiPage from "./pages/maui/gym-cleaning/+Page";
import IndustrialCleaningMauiPage from "./pages/maui/industrial-cleaning/+Page";
import MedicalOfficeCleaningMauiPage from "./pages/maui/medical-office-cleaning/+Page";
import RestaurantCleaningMauiPage from "./pages/maui/restaurant-cleaning/+Page";
import RetailCleaningMauiPage from "./pages/maui/retail-cleaning/+Page";
import SchoolCleaningMauiPage from "./pages/maui/school-cleaning/+Page";
import ShowroomCleaningMauiPage from "./pages/maui/showroom-cleaning/+Page";
import WarehouseCleaningMauiPage from "./pages/maui/warehouse-cleaning/+Page";
import SalonSpaCleaningMauiPage from "./pages/maui/salon-spa-cleaning/+Page";
import PostConstructionCleaningSouthFloridaPage from "./pages/south-florida/post-construction-cleaning-services/+Page";
import StandardCleaningSouthFloridaPage from "./pages/south-florida/standard-cleaning-services/+Page";
import DeepCleaningSouthFloridaPage from "./pages/south-florida/deep-cleaning-services/+Page";
import MoveOutCleaningSouthFloridaPage from "./pages/south-florida/move-out-cleaning-services/+Page";
import AirbnbCleaningSouthFloridaPage from "./pages/south-florida/airbnb-cleaning-services/+Page";
import ChurchCleaningSouthFloridaPage from "./pages/south-florida/church-cleaning/+Page";
import DataCenterCleaningSouthFloridaPage from "./pages/south-florida/data-center-cleaning/+Page";
import FactoryCleaningSouthFloridaPage from "./pages/south-florida/factory-cleaning/+Page";
import GovernmentFacilityCleaningSouthFloridaPage from "./pages/south-florida/government-facility-cleaning/+Page";
import GymCleaningSouthFloridaPage from "./pages/south-florida/gym-cleaning/+Page";
import IndustrialCleaningSouthFloridaPage from "./pages/south-florida/industrial-cleaning/+Page";
import MedicalOfficeCleaningSouthFloridaPage from "./pages/south-florida/medical-office-cleaning/+Page";
import RestaurantCleaningSouthFloridaPage from "./pages/south-florida/restaurant-cleaning/+Page";
import RetailCleaningSouthFloridaPage from "./pages/south-florida/retail-cleaning/+Page";
import SchoolCleaningSouthFloridaPage from "./pages/south-florida/school-cleaning/+Page";
import ShowroomCleaningSouthFloridaPage from "./pages/south-florida/showroom-cleaning/+Page";
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
import StandardCleaningColumbusOhioPage from "./pages/columbus-ohio/standard-cleaning-services/+Page";
import DeepCleaningColumbusOhioPage from "./pages/columbus-ohio/deep-cleaning-services/+Page";
import MoveOutCleaningColumbusOhioPage from "./pages/columbus-ohio/move-out-cleaning-services/+Page";
import PostConstructionCleaningColumbusOhioPage from "./pages/columbus-ohio/post-construction-cleaning-services/+Page";
import AirbnbCleaningColumbusOhioPage from "./pages/columbus-ohio/airbnb-cleaning-services/+Page";
import ChurchCleaningPage from "./pages/church-cleaning/+Page";
import DataCenterCleaningPage from "./pages/data-center-cleaning/+Page";
import FactoryCleaningPage from "./pages/factory-cleaning/+Page";
import GovernmentFacilityCleaningPage from "./pages/government-facility-cleaning/+Page";
import GymCleaningPage from "./pages/gym-cleaning/+Page";
import MedicalOfficeCleaningPage from "./pages/medical-office-cleaning/+Page";
import RetailCleaningPage from "./pages/general-retail-cleaning/+Page";
import SchoolCleaningPage from "./pages/school-cleaning/+Page";
import ShowroomCleaningPage from "./pages/showroom-cleaning/+Page";
import WarehouseCleaningPage from "./pages/warehouse-cleaning/+Page";
import SalonSpaCleaningPage from "./pages/salon-spa-cleaning/+Page";

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
          <Route path="/church-cleaning" element={<ChurchCleaningPage />} />
          <Route path="/data-center-cleaning" element={<DataCenterCleaningPage />} />
          <Route path="/factory-cleaning" element={<FactoryCleaningPage />} />
          <Route path="/government-facility-cleaning" element={<GovernmentFacilityCleaningPage />} />
          <Route path="/gym-cleaning" element={<GymCleaningPage />} />
          <Route path="/medical-office-cleaning" element={<MedicalOfficeCleaningPage />} />
          <Route path="/retail-cleaning" element={<RetailCleaningPage />} />
          <Route path="/school-cleaning" element={<SchoolCleaningPage />} />
          <Route path="/showroom-cleaning" element={<ShowroomCleaningPage />} />
          <Route path="/warehouse-cleaning" element={<WarehouseCleaningPage />} />
          <Route path="/salon-spa-cleaning" element={<SalonSpaCleaningPage />} />
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
          <Route path="/las-vegas/church-cleaning" element={<ChurchCleaningLasVegasPage />} />
          <Route path="/las-vegas/data-center-cleaning" element={<DataCenterCleaningLasVegasPage />} />
          <Route path="/las-vegas/factory-cleaning" element={<FactoryCleaningLasVegasPage />} />
          <Route path="/las-vegas/government-facility-cleaning" element={<GovernmentFacilityCleaningLasVegasPage />} />
          <Route path="/las-vegas/gym-cleaning" element={<GymCleaningLasVegasPage />} />
          <Route path="/las-vegas/industrial-cleaning" element={<IndustrialCleaningLasVegasPage />} />
          <Route path="/las-vegas/medical-office-cleaning" element={<MedicalOfficeCleaningLasVegasPage />} />
          <Route path="/las-vegas/restaurant-cleaning" element={<RestaurantCleaningLasVegasPage />} />
          <Route path="/las-vegas/retail-cleaning" element={<RetailCleaningLasVegasPage />} />
          <Route path="/las-vegas/showroom-cleaning" element={<ShowroomCleaningLasVegasPage />} />
          <Route path="/las-vegas/warehouse-cleaning" element={<WarehouseCleaningLasVegasPage />} />
          <Route path="/las-vegas/salon-spa-cleaning" element={<SalonSpaCleaningLasVegasPage />} />
          <Route path="/las-vegas/school-cleaning" element={<SchoolCleaningLasVegasPage />} />
          
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
          <Route path="/oahu/church-cleaning" element={<ChurchCleaningOahuPage />} />
          <Route path="/oahu/data-center-cleaning" element={<DataCenterCleaningOahuPage />} />
          <Route path="/oahu/factory-cleaning" element={<FactoryCleaningOahuPage />} />
          <Route path="/oahu/government-facility-cleaning" element={<GovernmentFacilityCleaningOahuPage />} />
          <Route path="/oahu/gym-cleaning" element={<GymCleaningOahuPage />} />
          <Route path="/oahu/industrial-cleaning" element={<IndustrialCleaningOahuPage />} />
          <Route path="/oahu/medical-office-cleaning" element={<MedicalOfficeCleaningOahuPage />} />
          <Route path="/oahu/restaurant-cleaning" element={<RestaurantCleaningOahuPage />} />
          <Route path="/oahu/retail-cleaning" element={<RetailCleaningOahuPage />} />
          <Route path="/oahu/school-cleaning" element={<SchoolCleaningOahuPage />} />
          <Route path="/oahu/showroom-cleaning" element={<ShowroomCleaningOahuPage />} />
          <Route path="/oahu/warehouse-cleaning" element={<WarehouseCleaningOahuPage />} />
          <Route path="/oahu/salon-spa-cleaning" element={<SalonSpaCleaningOahuPage />} />
          <Route path="/south-florida/post-construction-cleaning-services" element={<PostConstructionCleaningSouthFloridaPage />} />
          <Route path="/south-florida/standard-cleaning-services" element={<StandardCleaningSouthFloridaPage />} />
          <Route path="/south-florida/deep-cleaning-services" element={<DeepCleaningSouthFloridaPage />} />
          <Route path="/south-florida/move-out-cleaning-services" element={<MoveOutCleaningSouthFloridaPage />} />
          <Route path="/south-florida/airbnb-cleaning-services" element={<AirbnbCleaningSouthFloridaPage />} />
          <Route path="/south-florida/church-cleaning" element={<ChurchCleaningSouthFloridaPage />} />
          <Route path="/south-florida/data-center-cleaning" element={<DataCenterCleaningSouthFloridaPage />} />
          <Route path="/south-florida/factory-cleaning" element={<FactoryCleaningSouthFloridaPage />} />
          <Route path="/south-florida/government-facility-cleaning" element={<GovernmentFacilityCleaningSouthFloridaPage />} />
          <Route path="/south-florida/gym-cleaning" element={<GymCleaningSouthFloridaPage />} />
          <Route path="/south-florida/industrial-cleaning" element={<IndustrialCleaningSouthFloridaPage />} />
          <Route path="/south-florida/medical-office-cleaning" element={<MedicalOfficeCleaningSouthFloridaPage />} />
          <Route path="/south-florida/restaurant-cleaning" element={<RestaurantCleaningSouthFloridaPage />} />
          <Route path="/south-florida/retail-cleaning" element={<RetailCleaningSouthFloridaPage />} />
          <Route path="/south-florida/school-cleaning" element={<SchoolCleaningSouthFloridaPage />} />
          <Route path="/south-florida/showroom-cleaning" element={<ShowroomCleaningSouthFloridaPage />} />
          
          {/* Maui Routes */}
          <Route path="/maui" element={<MauiHome />} />
          <Route path="/maui-calculator" element={<MauiCalculator />} />
          <Route path="/book-now-maui" element={<MauiBooking />} />
          <Route path="/maui/post-construction-cleaning-services" element={<PostConstructionCleaningMauiPage />} />
          <Route path="/maui/move-out-cleaning-services" element={<MoveOutCleaningMauiPage />} />
        <Route path="/maui/deep-cleaning-services" element={<DeepCleaningMauiPage />} />
        <Route path="/maui/standard-cleaning-services" element={<StandardCleaningMauiPage />} />
          <Route path="/maui/airbnb-cleaning-services" element={<AirbnbCleaningMauiPage />} />
          <Route path="/maui/church-cleaning" element={<ChurchCleaningMauiPage />} />
          <Route path="/maui/data-center-cleaning" element={<DataCenterCleaningMauiPage />} />
          <Route path="/maui/factory-cleaning" element={<FactoryCleaningMauiPage />} />
          <Route path="/maui/government-facility-cleaning" element={<GovernmentFacilityCleaningMauiPage />} />
          <Route path="/maui/gym-cleaning" element={<GymCleaningMauiPage />} />
          <Route path="/maui/industrial-cleaning" element={<IndustrialCleaningMauiPage />} />
          <Route path="/maui/medical-office-cleaning" element={<MedicalOfficeCleaningMauiPage />} />
          <Route path="/maui/restaurant-cleaning" element={<RestaurantCleaningMauiPage />} />
          <Route path="/maui/retail-cleaning" element={<RetailCleaningMauiPage />} />
          <Route path="/maui/school-cleaning" element={<SchoolCleaningMauiPage />} />
          <Route path="/maui/showroom-cleaning" element={<ShowroomCleaningMauiPage />} />
          <Route path="/maui/warehouse-cleaning" element={<WarehouseCleaningMauiPage />} />
          <Route path="/maui/salon-spa-cleaning" element={<SalonSpaCleaningMauiPage />} />
          
          {/* Dallas Routes */}
          <Route path="/dallas/post-construction-cleaning-services" element={<PostConstructionCleaningDallasPage />} />
          <Route path="/dallas/airbnb-cleaning-services" element={<AirbnbCleaningDallasPage />} />
          <Route path="/dallas/move-out-cleaning-services" element={<MoveOutCleaningDallasPage />} />
          <Route path="/dallas/deep-cleaning-services" element={<DeepCleaningDallasPage />} />
          <Route path="/dallas/standard-cleaning-services" element={<StandardCleaningDallasPage />} />
          
          {/* Columbus Ohio Routes */}
          <Route path="/columbus-ohio" element={<ColumbusHome />} />
          <Route path="/columbus-ohio-calculator" element={<ColumbusCalculator />} />
          <Route path="/book-now-columbus-ohio" element={<ColumbusBooking />} />
          <Route path="/columbus-ohio/standard-cleaning-services" element={<StandardCleaningColumbusOhioPage />} />
          <Route path="/columbus-ohio/deep-cleaning-services" element={<DeepCleaningColumbusOhioPage />} />
          <Route path="/columbus-ohio/move-out-cleaning-services" element={<MoveOutCleaningColumbusOhioPage />} />
          <Route path="/columbus-ohio/post-construction-cleaning-services" element={<PostConstructionCleaningColumbusOhioPage />} />
          <Route path="/columbus-ohio/airbnb-cleaning-services" element={<AirbnbCleaningColumbusOhioPage />} />
          
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

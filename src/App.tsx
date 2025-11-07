import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LocationProvider } from "@/contexts/LocationContext";
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
import HiringRequirements from "./pages/HiringRequirements";
import HiringApplicationNew from "./pages/HiringApplicationNew";
import SubContractorAgreement from "./pages/SubContractorAgreement";
import CleaningSupplies from "./pages/CleaningSupplies";
import StandardVsDeep from "./pages/StandardVsDeep";
import StandardCleaning from "./pages/StandardCleaning";
import DeepCleaning from "./pages/DeepCleaning";
import AirbnbCleaning from "./pages/AirbnbCleaning";
import PostConstruction from "./pages/PostConstruction";
import MoveOutCleaning from "./pages/MoveOutCleaning";
import ResidentialServicesChecklist from "./pages/ResidentialServicesChecklist";
import CommercialCleaningEstimator from "./pages/CommercialCleaningEstimator";
import CommercialCleaningTimeEstimatorPage from "./pages/commercial-cleaning-time-estimator/index.page";
import CommercialCleaningCostEstimatorPage from "./pages/commercial-cleaning-cost-estimator/index.page";
import CommercialQuotePage from "./pages/commercial-quote/index.page";
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
import ChurchCleaningDallasPage from "./pages/dallas/church-cleaning/+Page";
import DataCenterCleaningDallasPage from "./pages/dallas/data-center-cleaning/+Page";
import FactoryCleaningDallasPage from "./pages/dallas/factory-cleaning/+Page";
import GovernmentFacilityCleaningDallasPage from "./pages/dallas/government-facility-cleaning/+Page";
import GymCleaningDallasPage from "./pages/dallas/gym-cleaning/+Page";
import IndustrialCleaningDallasPage from "./pages/dallas/industrial-cleaning/+Page";
import MedicalOfficeCleaningDallasPage from "./pages/dallas/medical-office-cleaning/+Page";
import RestaurantCleaningDallasPage from "./pages/dallas/restaurant-cleaning/+Page";
import RetailCleaningDallasPage from "./pages/dallas/retail-cleaning/+Page";
import SchoolCleaningDallasPage from "./pages/dallas/school-cleaning/+Page";
import ShowroomCleaningDallasPage from "./pages/dallas/showroom-cleaning/+Page";
import WarehouseCleaningDallasPage from "./pages/dallas/warehouse-cleaning/+Page";
import SalonSpaCleaningDallasPage from "./pages/dallas/salon-spa-cleaning/+Page";
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
import WarehouseCleaningSouthFloridaPage from "./pages/south-florida/warehouse-cleaning/+Page";
import SalonSpaCleaningSouthFloridaPage from "./pages/south-florida/salon-spa-cleaning/+Page";
import Blog from "./pages/Blog";
import AirbnbBeddingManagementPage from "./pages/blog/cleaning-tips/airbnb-bedding-management-you-should-know/+Page";
import MinimizeHouseworkTimePage from "./pages/blog/cleaning-tips/6-handy-tips-to-help-you-minimize-your-time-on-housework/+Page";
import ScienceOfSpringCleaningPage from "./pages/blog/cleaning-tips/the-science-of-spring-cleaning/+Page";
import CarpetCleaningFleaInfestationPage from "./pages/blog/cleaning-tips/carpet-cleaning-to-remove-flea-infestation/+Page";
import GrillMaintenanceGuidePage from "./pages/blog/cleaning-tips/grill-maintenance-101-the-ultimate-guide-to-cleaning-your-outdoor-grill/+Page";
import HealthCodeViolationsPage from "./pages/blog/cleaning-tips/health-code-violations/+Page";
import InkStainRemovalGuidePage from "./pages/blog/cleaning-tips/step-by-step-guide-effective-techniques-for-removing-ink-stains-from-carpets/+Page";
import SpringCleaningPartyPage from "./pages/blog/cleaning-tips/why-you-should-host-a-spring-cleaning-party/+Page";
import MoveOutCleaningChecklistPage from "./pages/blog/cleaning-tips/your-essential-guide-to-the-ultimate-move-out-cleaning-checklist/+Page";
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
import ChurchCleaningColumbusOhioPage from "./pages/columbus-ohio/church-cleaning/+Page";
import DataCenterCleaningColumbusOhioPage from "./pages/columbus-ohio/data-center-cleaning/+Page";
import FactoryCleaningColumbusOhioPage from "./pages/columbus-ohio/factory-cleaning/+Page";
import GovernmentFacilityCleaningColumbusOhioPage from "./pages/columbus-ohio/government-facility-cleaning/+Page";
import GymCleaningColumbusOhioPage from "./pages/columbus-ohio/gym-cleaning/+Page";
import IndustrialCleaningColumbusOhioPage from "./pages/columbus-ohio/industrial-cleaning/+Page";
import MedicalOfficeCleaningColumbusOhioPage from "./pages/columbus-ohio/medical-office-cleaning/+Page";
import RestaurantCleaningColumbusOhioPage from "./pages/columbus-ohio/restaurant-cleaning/+Page";
import RetailCleaningColumbusOhioPage from "./pages/columbus-ohio/retail-cleaning/+Page";
import SchoolCleaningColumbusOhioPage from "./pages/columbus-ohio/school-cleaning/+Page";
import ShowroomCleaningColumbusOhioPage from "./pages/columbus-ohio/showroom-cleaning/+Page";
import WarehouseCleaningColumbusOhioPage from "./pages/columbus-ohio/warehouse-cleaning/+Page";
import SalonSpaCleaningColumbusOhioPage from "./pages/columbus-ohio/salon-spa-cleaning/+Page";
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
import IndustrialCleaningPage from "./pages/industrial-cleaning/+Page";
import RestaurantCleaningPage from "./pages/restaurant-cleaning/+Page";
import NaturesAirPurifiersBlogPage from "./pages/blog/cleaning-tips/natures-air-purifiers-the-best-plants-for-cleaner-indoor-air/+Page";

const queryClient = new QueryClient();

const LanguageSynchronizer = () => {
  const location = useLocation();
  useEffect(() => {
    const isEs = window.location.pathname.startsWith("/es");
    const target = isEs ? "es" : "en";
    if (i18n.language !== target) {
      i18n.changeLanguage(target);
    }
  }, [location]);
  return null;
};

// Helper function to create both English and Spanish route elements
const createDualLanguageRoutes = (path: string, element: React.ReactElement) => [
  <Route key={path} path={path} element={element} />,
  <Route key={`/es${path}`} path={`/es${path}`} element={element} />
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocationProvider>
          <LanguageSynchronizer />
          <ScrollToTop />
          <Routes>
          {...createDualLanguageRoutes("/", <Index />)}
          
          {/* General Pages */}
          {...createDualLanguageRoutes("/about", <AboutUs />)}
          {...createDualLanguageRoutes("/about/faq", <FAQ />)}
          {...createDualLanguageRoutes("/residential-cleaning", <ResidentialCleaning />)}
          {...createDualLanguageRoutes("/commercial-cleaning", <CommercialCleaning />)}
          {...createDualLanguageRoutes("/church-cleaning", <ChurchCleaningPage />)}
          {...createDualLanguageRoutes("/data-center-cleaning", <DataCenterCleaningPage />)}
          {...createDualLanguageRoutes("/industrial-cleaning", <IndustrialCleaningPage />)}
          {...createDualLanguageRoutes("/factory-cleaning", <FactoryCleaningPage />)}
          {...createDualLanguageRoutes("/government-facility-cleaning", <GovernmentFacilityCleaningPage />)}
          {...createDualLanguageRoutes("/gym-cleaning", <GymCleaningPage />)}
          {...createDualLanguageRoutes("/medical-office-cleaning", <MedicalOfficeCleaningPage />)}
          {...createDualLanguageRoutes("/retail-cleaning", <RetailCleaningPage />)}
          {...createDualLanguageRoutes("/school-cleaning", <SchoolCleaningPage />)}
          {...createDualLanguageRoutes("/showroom-cleaning", <ShowroomCleaningPage />)}
          {...createDualLanguageRoutes("/warehouse-cleaning", <WarehouseCleaningPage />)}
          {...createDualLanguageRoutes("/salon-spa-cleaning", <SalonSpaCleaningPage />)}
          {...createDualLanguageRoutes("/restaurant-cleaning", <RestaurantCleaningPage />)}
          {...createDualLanguageRoutes("/contact", <Contact />)}
          {...createDualLanguageRoutes("/terms-and-conditions-page", <TermsAndConditions />)}
          {...createDualLanguageRoutes("/privacy-policy-page", <PrivacyPolicy />)}
          {...createDualLanguageRoutes("/sitemap", <Sitemap />)}
          
          {/* Services Pages */}
          {...createDualLanguageRoutes("/residential-services-checklist", <ResidentialServicesChecklist />)}
          {...createDualLanguageRoutes("/blog/standard-cleaning-vs-deep-cleaning", <StandardVsDeep />)}
          {...createDualLanguageRoutes("/standard-cleaning-services", <StandardCleaning />)}
          {...createDualLanguageRoutes("/deep-cleaning-services", <DeepCleaning />)}
          {...createDualLanguageRoutes("/airbnb-cleaning-services", <AirbnbCleaning />)}
          {...createDualLanguageRoutes("/post-construction-cleaning-services", <PostConstruction />)}
          {...createDualLanguageRoutes("/move-out-cleaning-services", <MoveOutCleaning />)}
          {...createDualLanguageRoutes("/commercial-cleaning-estimator", <CommercialCleaningEstimator />)}
          {...createDualLanguageRoutes("/commercial-cleaning-time-estimator", <CommercialCleaningTimeEstimatorPage />)}
          {...createDualLanguageRoutes("/commercial-cleaning-cost-estimator", <CommercialCleaningCostEstimatorPage />)}
          {...createDualLanguageRoutes("/commercial-quote", <CommercialQuotePage />)}
          {...createDualLanguageRoutes("/las-vegas/airbnb-cleaning-services", <AirbnbCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/standard-cleaning-services", <StandardCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/deep-cleaning-services", <DeepCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/move-out-cleaning-services", <MoveOutCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/post-construction-cleaning-services", <PostConstructionCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/church-cleaning", <ChurchCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/data-center-cleaning", <DataCenterCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/factory-cleaning", <FactoryCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/government-facility-cleaning", <GovernmentFacilityCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/gym-cleaning", <GymCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/industrial-cleaning", <IndustrialCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/medical-office-cleaning", <MedicalOfficeCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/restaurant-cleaning", <RestaurantCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/retail-cleaning", <RetailCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/showroom-cleaning", <ShowroomCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/warehouse-cleaning", <WarehouseCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/salon-spa-cleaning", <SalonSpaCleaningLasVegasPage />)}
          {...createDualLanguageRoutes("/las-vegas/school-cleaning", <SchoolCleaningLasVegasPage />)}
          
          {/* Blog & Hiring */}
          {...createDualLanguageRoutes("/blog", <Blog />)}
          {...createDualLanguageRoutes("/blog/page/:page", <Blog />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/health-code-violations", <HealthCodeViolationsPage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/airbnb-bedding-management-you-should-know", <AirbnbBeddingManagementPage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/6-handy-tips-to-help-you-minimize-your-time-on-housework", <MinimizeHouseworkTimePage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/the-science-of-spring-cleaning", <ScienceOfSpringCleaningPage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/carpet-cleaning-to-remove-flea-infestation", <CarpetCleaningFleaInfestationPage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/why-you-should-host-a-spring-cleaning-party", <SpringCleaningPartyPage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/grill-maintenance-101-the-ultimate-guide-to-cleaning-your-outdoor-grill", <GrillMaintenanceGuidePage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/step-by-step-guide-effective-techniques-for-removing-ink-stains-from-carpets", <InkStainRemovalGuidePage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/your-essential-guide-to-the-ultimate-move-out-cleaning-checklist", <MoveOutCleaningChecklistPage />)}
          {...createDualLanguageRoutes("/blog/cleaning-tips/natures-air-purifiers-the-best-plants-for-cleaner-indoor-air", <NaturesAirPurifiersBlogPage />)}
          {...createDualLanguageRoutes("/hiring-req", <HiringRequirements />)}
          {...createDualLanguageRoutes("/hiring-application/how-to-use-the-maidily-mobile-app", <MaidilyApp />)}
          
          {/* South Florida Routes */}
          {...createDualLanguageRoutes("/south-florida", <SouthFloridaHome />)}
          {...createDualLanguageRoutes("/south-florida-calculator", <SouthFloridaCalculator />)}
          {...createDualLanguageRoutes("/book-now-south-florida", <SouthFloridaBooking />)}
          
          {/* Las Vegas Routes */}
          {...createDualLanguageRoutes("/las-vegas", <LasVegasHome />)}
          {...createDualLanguageRoutes("/las-vegas-calculator", <LasVegasCalculator />)}
          {...createDualLanguageRoutes("/book-now-las-vegas", <LasVegasBooking />)}
          
          {/* Oahu Routes */}
          {...createDualLanguageRoutes("/oahu", <OahuHome />)}
          {...createDualLanguageRoutes("/oahu-calculator", <OahuCalculator />)}
          {...createDualLanguageRoutes("/book-now-oahu", <OahuBooking />)}
          {...createDualLanguageRoutes("/oahu/move-out-cleaning-services", <MoveOutCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/standard-cleaning-services", <StandardCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/deep-cleaning-services", <DeepCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/airbnb-cleaning-services", <AirbnbCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/post-construction-cleaning-services", <PostConstructionCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/church-cleaning", <ChurchCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/data-center-cleaning", <DataCenterCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/factory-cleaning", <FactoryCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/government-facility-cleaning", <GovernmentFacilityCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/gym-cleaning", <GymCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/industrial-cleaning", <IndustrialCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/medical-office-cleaning", <MedicalOfficeCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/restaurant-cleaning", <RestaurantCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/retail-cleaning", <RetailCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/school-cleaning", <SchoolCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/showroom-cleaning", <ShowroomCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/warehouse-cleaning", <WarehouseCleaningOahuPage />)}
          {...createDualLanguageRoutes("/oahu/salon-spa-cleaning", <SalonSpaCleaningOahuPage />)}
          {...createDualLanguageRoutes("/south-florida/post-construction-cleaning-services", <PostConstructionCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/standard-cleaning-services", <StandardCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/deep-cleaning-services", <DeepCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/move-out-cleaning-services", <MoveOutCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/airbnb-cleaning-services", <AirbnbCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/church-cleaning", <ChurchCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/data-center-cleaning", <DataCenterCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/factory-cleaning", <FactoryCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/government-facility-cleaning", <GovernmentFacilityCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/gym-cleaning", <GymCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/industrial-cleaning", <IndustrialCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/medical-office-cleaning", <MedicalOfficeCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/restaurant-cleaning", <RestaurantCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/retail-cleaning", <RetailCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/school-cleaning", <SchoolCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/showroom-cleaning", <ShowroomCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/warehouse-cleaning", <WarehouseCleaningSouthFloridaPage />)}
          {...createDualLanguageRoutes("/south-florida/salon-spa-cleaning", <SalonSpaCleaningSouthFloridaPage />)}
          
          {/* Maui Routes */}
          {...createDualLanguageRoutes("/maui", <MauiHome />)}
          {...createDualLanguageRoutes("/maui-calculator", <MauiCalculator />)}
          {...createDualLanguageRoutes("/book-now-maui", <MauiBooking />)}
          {...createDualLanguageRoutes("/maui/post-construction-cleaning-services", <PostConstructionCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/move-out-cleaning-services", <MoveOutCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/deep-cleaning-services", <DeepCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/standard-cleaning-services", <StandardCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/airbnb-cleaning-services", <AirbnbCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/church-cleaning", <ChurchCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/data-center-cleaning", <DataCenterCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/factory-cleaning", <FactoryCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/government-facility-cleaning", <GovernmentFacilityCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/gym-cleaning", <GymCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/industrial-cleaning", <IndustrialCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/medical-office-cleaning", <MedicalOfficeCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/restaurant-cleaning", <RestaurantCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/retail-cleaning", <RetailCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/school-cleaning", <SchoolCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/showroom-cleaning", <ShowroomCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/warehouse-cleaning", <WarehouseCleaningMauiPage />)}
          {...createDualLanguageRoutes("/maui/salon-spa-cleaning", <SalonSpaCleaningMauiPage />)}
          
          {/* Columbus Ohio Routes */}
          {...createDualLanguageRoutes("/columbus-ohio", <ColumbusHome />)}
          {...createDualLanguageRoutes("/columbus-ohio-calculator", <ColumbusCalculator />)}
          {...createDualLanguageRoutes("/book-now-columbus-ohio", <ColumbusBooking />)}
          {...createDualLanguageRoutes("/columbus-ohio/standard-cleaning-services", <StandardCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/deep-cleaning-services", <DeepCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/move-out-cleaning-services", <MoveOutCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/post-construction-cleaning-services", <PostConstructionCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/airbnb-cleaning-services", <AirbnbCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/church-cleaning", <ChurchCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/data-center-cleaning", <DataCenterCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/factory-cleaning", <FactoryCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/government-facility-cleaning", <GovernmentFacilityCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/gym-cleaning", <GymCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/industrial-cleaning", <IndustrialCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/medical-office-cleaning", <MedicalOfficeCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/restaurant-cleaning", <RestaurantCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/retail-cleaning", <RetailCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/school-cleaning", <SchoolCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/showroom-cleaning", <ShowroomCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/warehouse-cleaning", <WarehouseCleaningColumbusOhioPage />)}
          {...createDualLanguageRoutes("/columbus-ohio/salon-spa-cleaning", <SalonSpaCleaningColumbusOhioPage />)}
          
          {/* Dallas Routes */}
          {...createDualLanguageRoutes("/dallas", <DallasHome />)}
          {...createDualLanguageRoutes("/dallas-calculator", <DallasCalculator />)}
          {...createDualLanguageRoutes("/book-now-dallas", <DallasBooking />)}
          {...createDualLanguageRoutes("/dallas/post-construction-cleaning-services", <PostConstructionCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/airbnb-cleaning-services", <AirbnbCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/move-out-cleaning-services", <MoveOutCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/deep-cleaning-services", <DeepCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/standard-cleaning-services", <StandardCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/church-cleaning", <ChurchCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/data-center-cleaning", <DataCenterCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/factory-cleaning", <FactoryCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/government-facility-cleaning", <GovernmentFacilityCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/gym-cleaning", <GymCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/industrial-cleaning", <IndustrialCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/medical-office-cleaning", <MedicalOfficeCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/restaurant-cleaning", <RestaurantCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/retail-cleaning", <RetailCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/school-cleaning", <SchoolCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/showroom-cleaning", <ShowroomCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/warehouse-cleaning", <WarehouseCleaningDallasPage />)}
          {...createDualLanguageRoutes("/dallas/salon-spa-cleaning", <SalonSpaCleaningDallasPage />)}
          
          {/* Hiring Routes */}
          {...createDualLanguageRoutes("/hiring-req", <HiringRequirements />)}
          {...createDualLanguageRoutes("/hiring-application-new", <HiringApplicationNew />)}
          {...createDualLanguageRoutes("/sub-contractor-agreement", <SubContractorAgreement />)}
          {...createDualLanguageRoutes("/hiring-application/cleaning-supplies", <CleaningSupplies />)}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {...createDualLanguageRoutes("*", <NotFound />)}
        </Routes>
        </LocationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

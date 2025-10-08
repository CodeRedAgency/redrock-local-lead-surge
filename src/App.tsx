import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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

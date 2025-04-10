
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Expenses from "./pages/Expenses";
import Revenue from "./pages/Revenue";
import Budget from "./pages/Budget";
import Forecast from "./pages/Forecast";
import Taxes from "./pages/Taxes";
import Settings from "./pages/Settings";
import RestaurantOccupancy from "./pages/RestaurantOccupancy";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/restaurant-occupancy" element={<RestaurantOccupancy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;


import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3,
  Home, 
  DollarSign, 
  LineChart, 
  PiggyBank, 
  Calculator, 
  Settings, 
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Inicio", path: "/" },
  { icon: BarChart3, label: "Ingresos", path: "/revenue" },
  { icon: DollarSign, label: "Gastos", path: "/expenses" },
  { icon: LineChart, label: "Previsiones", path: "/forecast" },
  { icon: PiggyBank, label: "Presupuesto", path: "/budget" },
  { icon: Calculator, label: "Impuestos", path: "/taxes" },
  { icon: Settings, label: "Ajustes", path: "/settings" },
];

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen sticky top-0 bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-sidebar-border">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          {!collapsed && (
            <span className="text-lg font-bold text-finance-primary">FinancePro</span>
          )}
          {collapsed && <BarChart3 className="h-6 w-6 text-finance-primary" />}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className={cn("rounded-full", collapsed && "absolute -right-3 top-7 bg-sidebar border border-sidebar-border h-6 w-6")}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="py-4">
        {sidebarItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className="flex items-center px-4 py-2 mb-1 hover:bg-finance-light transition-colors text-finance-text"
          >
            <item.icon className={cn("h-5 w-5 text-finance-primary", collapsed ? "mx-auto" : "mr-2")} />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

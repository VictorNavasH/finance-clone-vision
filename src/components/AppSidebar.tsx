
import { Link, useLocation } from "react-router-dom";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
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

interface AppSidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export default function AppSidebar({ 
  collapsed = false, 
  onCollapsedChange 
}: AppSidebarProps) {
  const location = useLocation();

  const handleToggleCollapse = () => {
    if (onCollapsedChange) {
      onCollapsedChange(!collapsed);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 h-16 border-b border-sidebar-border">
          <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
            {!collapsed ? (
              <span className="text-lg font-bold text-finance-primary">NÜA Finance</span>
            ) : (
              <span className="text-2xl font-bold text-finance-primary">NÜA</span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleToggleCollapse}
            className={cn("rounded-full", collapsed && "absolute -right-3 top-7 bg-sidebar border border-sidebar-border h-6 w-6")}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <div className="py-4 h-[calc(100%-4rem)] overflow-y-auto scrollbar-hide">
          <nav className="space-y-1 px-2">
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Tooltip key={index} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-finance-primary text-white" 
                          : "text-finance-text hover:bg-finance-light hover:text-finance-primary",
                        collapsed ? "justify-center" : "justify-start"
                      )}
                    >
                      <item.icon className={cn("h-5 w-5", collapsed ? "" : "mr-3")} />
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  </TooltipTrigger>
                  {collapsed && (
                    <TooltipContent side="right">
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              );
            })}
          </nav>
        </div>
      </div>
    </TooltipProvider>
  );
}

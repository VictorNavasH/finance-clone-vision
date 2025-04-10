
import { KpiBlock } from "@/components/ui/kpi-block";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ExpenseBreakdown from "@/components/dashboard/ExpenseBreakdown";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import ForecastCard from "@/components/dashboard/ForecastCard";
import UpcomingPayments from "@/components/dashboard/UpcomingPayments";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calendar, CreditCard, DollarSign, TrendingUp, TrendingDown, PiggyBank, Restaurant } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [view, setView] = useState("all");
  const isMobile = useIsMobile();
  
  // Datos de ejemplo para KPIs
  const kpiData = [
    {
      title: "Ingresos Totales",
      value: 24560,
      formatter: (val: number | string) => {
        const num = typeof val === 'string' ? parseFloat(val) : val;
        return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      },
      prefix: "€",
      change: 15.2,
      icon: <DollarSign className="h-5 w-5" />,
      variant: "default" as const,
    },
    {
      title: "Gastos Totales",
      value: 12310,
      formatter: (val: number | string) => {
        const num = typeof val === 'string' ? parseFloat(val) : val;
        return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      },
      prefix: "€",
      change: -9.1,
      icon: <TrendingDown className="h-5 w-5" />,
      variant: "default" as const,
    },
    {
      title: "Beneficio Neto",
      value: 12250,
      formatter: (val: number | string) => {
        const num = typeof val === 'string' ? parseFloat(val) : val;
        return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      },
      prefix: "€",
      change: 22.5,
      icon: <TrendingUp className="h-5 w-5" />,
      variant: "default" as const,
    },
    {
      title: "Variación Presupuesto",
      value: 3840,
      formatter: (val: number | string) => {
        const num = typeof val === 'string' ? parseFloat(val) : val;
        return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      },
      prefix: "+€",
      change: 3.8,
      icon: <PiggyBank className="h-5 w-5" />,
      variant: "default" as const,
    },
  ];

  return (
    <div className="p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-finance-text">Cuadro de Mando</h1>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size={isMobile ? "sm" : "default"} className="h-8">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="whitespace-nowrap">1 Oct - 31 Oct, 2023</span>
          </Button>
          <Button 
            variant="default" 
            size={isMobile ? "sm" : "default"}
            className="h-8 bg-finance-primary hover:bg-finance-primary/90"
          >
            <CreditCard className="h-4 w-4 mr-2" />
            <span className="whitespace-nowrap">Añadir Transacción</span>
          </Button>
          <Button 
            variant="outline" 
            size={isMobile ? "sm" : "default"}
            className="h-8"
            asChild
          >
            <Link to="/restaurant-occupancy">
              <Restaurant className="h-4 w-4 mr-2" />
              <span className="whitespace-nowrap">Dashboard Restaurante</span>
            </Link>
          </Button>
        </div>
      </div>

      <Tabs value={view} onValueChange={setView} className="mb-3">
        <TabsList className="w-full sm:w-auto grid grid-cols-4 sm:inline-flex">
          <TabsTrigger value="all">Todo</TabsTrigger>
          <TabsTrigger value="revenue">Ingresos</TabsTrigger>
          <TabsTrigger value="expenses">Gastos</TabsTrigger>
          <TabsTrigger value="budget">Presupuesto</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="space-y-3">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {kpiData.map((kpi, index) => (
            <KpiBlock
              key={index}
              title={kpi.title}
              value={kpi.value}
              formatter={kpi.formatter}
              prefix={kpi.prefix}
              change={kpi.change}
              icon={kpi.icon}
              variant={kpi.variant}
            />
          ))}
        </div>
        
        {/* Revenue Chart */}
        <div className="grid grid-cols-1 gap-3">
          <RevenueChart />
        </div>
        
        {/* Other Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <ExpenseBreakdown />
          <BudgetProgress />
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <ForecastCard />
            <UpcomingPayments />
          </div>
        </div>
      </div>
    </div>
  );
}

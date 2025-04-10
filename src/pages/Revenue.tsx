
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { revenueData, revenueBySource } from "@/data/revenueData";
import RevenueToolbar from "@/components/revenue/RevenueToolbar";
import RevenueKpiCards from "@/components/revenue/RevenueKpiCards";
import RevenueTrendsChart from "@/components/revenue/RevenueTrendsChart";
import RevenueBySource from "@/components/revenue/RevenueBySource";
import QuarterlyRevenue from "@/components/revenue/QuarterlyRevenue";

export default function Revenue() {
  const { toast } = useToast();
  const [yearFilter, setYearFilter] = useState("2023");
  
  const handleExport = () => {
    toast({
      title: "Exportando datos",
      description: "Los datos de ingresos se están exportando",
    });
    // Aquí iría la lógica real de exportación
    setTimeout(() => {
      toast({
        title: "Exportación completada",
        description: "Los datos se han exportado correctamente",
        variant: "default",
      });
    }, 1500);
  };
  
  const handleFilter = () => {
    toast({
      title: "Filtros aplicados",
      description: "Mostrando datos filtrados",
    });
    // Aquí iría la lógica real de filtrado
  };
  
  const handleAddRevenue = () => {
    toast({
      title: "Nuevo ingreso",
      description: "Funcionalidad para añadir un nuevo ingreso en desarrollo",
    });
    // Aquí iría la lógica para abrir un formulario de nuevo ingreso
  };
  
  const handleYearChange = () => {
    // Alternar entre 2022 y 2023 para demostración
    const newYear = yearFilter === "2023" ? "2022" : "2023";
    setYearFilter(newYear);
    
    toast({
      title: `Año cambiado: ${newYear}`,
      description: `Mostrando datos del año ${newYear}`,
    });
  };

  return (
    <Layout>
      <div>
        <RevenueToolbar 
          yearFilter={yearFilter}
          onYearChange={handleYearChange}
          onFilter={handleFilter}
          onExport={handleExport}
          onAddRevenue={handleAddRevenue}
        />
        
        <RevenueKpiCards />
        
        <RevenueTrendsChart data={revenueData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <RevenueBySource data={revenueBySource} />
          <QuarterlyRevenue />
        </div>
      </div>
    </Layout>
  );
}

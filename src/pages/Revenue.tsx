
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { revenueData, revenueBySource } from "@/data/revenueData";
import RevenueToolbar from "@/components/revenue/RevenueToolbar";
import RevenueKpiCards from "@/components/revenue/RevenueKpiCards";
import RevenueTrendsChart from "@/components/revenue/RevenueTrendsChart";
import RevenueBySource from "@/components/revenue/RevenueBySource";
import QuarterlyRevenue from "@/components/revenue/QuarterlyRevenue";
import AddRevenueDialog from "@/components/revenue/AddRevenueDialog";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export default function Revenue() {
  const { toast } = useToast();
  const [yearFilter, setYearFilter] = useState("2023");
  const [showAddRevenueDialog, setShowAddRevenueDialog] = useState(false);
  const [showYearFilter, setShowYearFilter] = useState(false);
  
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
  
  const handleAddRevenue = (data: any) => {
    console.log("Nuevo ingreso:", data);
    toast({
      title: "Ingreso añadido",
      description: `Se ha añadido un nuevo ingreso de €${data.amount}`,
      variant: "default",
    });
    // Aquí iría la lógica real para añadir ingresos a la base de datos
  };
  
  const changeYear = (year: string) => {
    setYearFilter(year);
    toast({
      title: `Año cambiado: ${year}`,
      description: `Mostrando datos del año ${year}`,
    });
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <RevenueToolbar 
          yearFilter={yearFilter}
          onYearChange={() => setShowYearFilter(true)}
          onFilter={handleFilter}
          onExport={handleExport}
          onAddRevenue={() => setShowAddRevenueDialog(true)}
        />
        
        <RevenueKpiCards />
        
        <RevenueTrendsChart data={revenueData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueBySource data={revenueBySource} />
          <QuarterlyRevenue />
        </div>

        {/* Year Filter Alert Dialog */}
        <AlertDialog open={showYearFilter} onOpenChange={setShowYearFilter}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Seleccionar Año</AlertDialogTitle>
              <AlertDialogDescription>
                Selecciona el año para filtrar los datos de ingresos.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <Button 
                onClick={() => changeYear("2022")} 
                variant={yearFilter === "2022" ? "default" : "outline"}
                className={yearFilter === "2022" ? "bg-[#227C9D]" : ""}
              >
                2022
              </Button>
              <Button 
                onClick={() => changeYear("2023")} 
                variant={yearFilter === "2023" ? "default" : "outline"}
                className={yearFilter === "2023" ? "bg-[#227C9D]" : ""}
              >
                2023
              </Button>
              <Button 
                onClick={() => changeYear("2024")} 
                variant={yearFilter === "2024" ? "default" : "outline"}
                className={yearFilter === "2024" ? "bg-[#227C9D]" : ""}
              >
                2024
              </Button>
              <Button 
                onClick={() => changeYear("2025")} 
                variant={yearFilter === "2025" ? "default" : "outline"}
                className={yearFilter === "2025" ? "bg-[#227C9D]" : ""}
              >
                2025
              </Button>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cerrar</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Add Revenue Dialog */}
        <AddRevenueDialog 
          open={showAddRevenueDialog} 
          onOpenChange={setShowAddRevenueDialog} 
          onAddRevenue={handleAddRevenue}
        />
      </div>
    </Layout>
  );
}

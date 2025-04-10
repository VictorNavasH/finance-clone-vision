
import { Button } from "@/components/ui/button";
import { Calendar, Download, Filter, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RevenueToolbarProps {
  yearFilter: string;
  onYearChange: () => void;
  onFilter: () => void;
  onExport: () => void;
  onAddRevenue: () => void;
}

const RevenueToolbar = ({ 
  yearFilter, 
  onYearChange, 
  onFilter, 
  onExport, 
  onAddRevenue 
}: RevenueToolbarProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <h2 className="text-3xl font-bold">Análisis de Ingresos</h2>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="h-9" onClick={onYearChange}>
          <Calendar className="h-4 w-4 mr-2" />
          Año {yearFilter}
        </Button>
        <Button variant="outline" size="sm" className="h-9" onClick={onFilter}>
          <Filter className="h-4 w-4 mr-2" />
          Filtrar
        </Button>
        <Button variant="outline" size="sm" className="h-9" onClick={onExport}>
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
        <Button 
          style={{ backgroundColor: "#227C9D" }} 
          size="sm" 
          className="h-9"
          onClick={onAddRevenue}
        >
          <Plus className="h-4 w-4 mr-2" />
          Añadir Ingreso
        </Button>
      </div>
    </div>
  );
};

export default RevenueToolbar;

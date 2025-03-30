
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  description?: string;
}

const StatCard = ({ title, value, change, isPositive, description }: StatCardProps) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-[#2F2F4C]">{value}</div>
      <div className={cn(
        "text-sm flex items-center",
        isPositive ? "text-[#FE6D73]" : "text-[#17C3B2]"
      )}>
        {isPositive ? 
          <TrendingUp className="h-3 w-3 mr-1" /> : 
          <TrendingDown className="h-3 w-3 mr-1" />
        }
        {change}
      </div>
      {description && <p className="mt-2 text-xs text-muted-foreground">{description}</p>}
    </CardContent>
  </Card>
);

export default function ExpenseStats() {
  const stats = [
    {
      title: "Gastos Totales",
      value: "€142.100",
      change: "+8,2% respecto al año anterior",
      isPositive: true,
      description: "Total de gastos registrados en el año actual"
    },
    {
      title: "Gasto Mensual Promedio",
      value: "€11.841",
      change: "+5,4% respecto al año anterior",
      isPositive: true,
      description: "Promedio mensual de todos los gastos"
    },
    {
      title: "Eficiencia de Gastos",
      value: "59,2%",
      change: "-2,5% respecto al año anterior",
      isPositive: false,
      description: "Porcentaje de gastos en relación a los ingresos"
    },
    {
      title: "Gastos por Empleado",
      value: "€4.743",
      change: "+1,8% respecto al año anterior",
      isPositive: true,
      description: "Gasto promedio por empleado mensual"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

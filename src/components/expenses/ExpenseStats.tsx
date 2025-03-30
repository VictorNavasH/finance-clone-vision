
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatCard = ({ title, value, change, isPositive }: StatCardProps) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-finance-text">{value}</div>
      <div className={cn(
        "text-sm flex items-center",
        isPositive ? "text-finance-danger" : "text-finance-secondary"
      )}>
        {isPositive ? 
          <TrendingUp className="h-3 w-3 mr-1" /> : 
          <TrendingDown className="h-3 w-3 mr-1" />
        }
        {change}
      </div>
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
    },
    {
      title: "Gasto Mensual Promedio",
      value: "€11.841",
      change: "+5,4% respecto al año anterior",
      isPositive: true,
    },
    {
      title: "Eficiencia de Gastos",
      value: "59,2%",
      change: "-2,5% respecto al año anterior",
      isPositive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

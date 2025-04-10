
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
}

const RevenueKpiCards = () => {
  const kpiCards: KpiCardProps[] = [
    {
      title: "Ingresos Totales",
      value: "€240.000",
      change: "+12,5% respecto al año anterior",
    },
    {
      title: "Ingreso Mensual Promedio",
      value: "€20.000",
      change: "+8,3% respecto al año anterior",
    },
    {
      title: "Tasa de Crecimiento",
      value: "12,5%",
      change: "+2,1% respecto al año anterior",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpiCards.map((card, index) => (
        <Card key={index} className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{card.value}</div>
            <div className="text-sm text-finance-secondary flex items-center">
              {card.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RevenueKpiCards;

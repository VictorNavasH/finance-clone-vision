
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuarterlyRevenue = () => {
  const quarterlyData = [
    { quarter: "T1", value: "€41.500", change: "+10,2% Interanual" },
    { quarter: "T2", value: "€51.000", change: "+12,8% Interanual" },
    { quarter: "T3", value: "€57.800", change: "+13,5% Interanual" },
    { quarter: "T4", value: "€89.700", change: "+15,2% Interanual" },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Ingresos Trimestrales</CardTitle>
        <CardDescription>Rendimiento de ingresos por trimestre</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {quarterlyData.map((item, index) => (
            <div key={index} className="bg-muted/20 p-4 rounded-lg">
              <div className="text-sm font-medium text-muted-foreground mb-2">{item.quarter}</div>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-finance-secondary">{item.change}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuarterlyRevenue;
